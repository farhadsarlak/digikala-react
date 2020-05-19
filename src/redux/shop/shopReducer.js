import './shopTypes';
import { shopTypes } from './shopTypes';

const INITIAL_STATE = {
    isFetching: false,
    products: [],
    collections: [],
    categories: [],
    submenus: [],
    brands: [],
    error: ""
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case shopTypes.FETCH_PRODUCTS_START:
            return {
                ...state,
                isFetching: true
            };
        case shopTypes.FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.payload
            };

        case shopTypes.FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                collections: action.payload
            };

        case shopTypes.FETCH_SUBMENU_SUCCESS:
            return {
                ...state,
                submenus: action.payload
            };

        case shopTypes.FETCH_CATEGORY_SUCCESS:
            return {
                ...state,
                categories: action.payload
            };

        case shopTypes.FETCH_BRANDS_SUCCESS:
            return {
                ...state,
                brands: action.payload,
                isFetching: false
            };
        default: return state;
    }
}

export default shopReducer;