import React, { createContext, useContext, useEffect, useState } from 'react';

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/mir-hussain/moon-tech-usereducer-contextapi/main/products.json")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    const value = {
        products
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