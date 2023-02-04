import { productActionTypes } from "./productActionTypes"

export const initialState = {
    loading: false,
    products: [],
    isError: false,
    error: ""
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
        default:
            return state;
    }
}