import { productActionTypes } from "./productActionTypes"

export const initialState = {
    loading: false,
    products: [],
    isError: false,
    error: "",
    cart: []
}


export const productReducer = (state, action) => {
    switch (action.type) {
        case productActionTypes.FETCHING_START:
            return {
                ...state,
                loading: true,
                products: [],
                isError: false,
                error: ""
            }
        case productActionTypes.FETCHING_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload,
                isError: false,
                error: ""
            }
        case productActionTypes.FETCHING_ERROR:
            return {
                ...state,
                loading: false,
                products: [],
                isError: true,
                error: action.payload
            }
        case productActionTypes.ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        default:
            return state;
    }
}