import { productTypes } from './productTypes';

const productReducer = (state = {}, action) => {
    switch (action.type) {
        case productTypes.GET_PRODUCT_START:
            return {
                ...state,
                isLoading: true
            }

        case productTypes.GET_PRODUCT:
            return {
                ...action.payload
            }

        case productTypes.GET_PRODUCT_END:
            return {
                ...state,
                isLoading: false
            }

        default: return state;
    }
}

export default productReducer;