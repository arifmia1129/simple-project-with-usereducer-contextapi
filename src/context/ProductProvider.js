import React, { createContext, useContext, useEffect, useReducer, useState } from 'react';
import { productActionTypes } from '../state/productState/productActionTypes';
import { initialState, productReducer } from '../state/productState/productReducer';

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
    const [state, dispatch] = useReducer(productReducer, initialState);

    useEffect(() => {
        dispatch({ type: productActionTypes.FETCHING_START })
        fetch("https://raw.githubusercontent.com/mir-hussain/moon-tech-usereducer-contextapi/main/products.json")
            .then(res => res.json())
            .then(data => dispatch({ type: productActionTypes.FETCHING_SUCCESS, payload: data }))
            .catch((error) => dispatch({ type: productActionTypes.FETCHING_ERROR, payload: error }))
    }, [])


    const value = {
        state,
        dispatch
    }
    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    );
};

export const useProducts = () => {
    const context = useContext(ProductContext);
    return context;
}

export default ProductProvider;