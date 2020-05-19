import { shopTypes } from './shopTypes';
import axios from 'axios';
import { URL } from '../../config';

export const fetchProductsPending = () => ({
    type: shopTypes.FETCH_PRODUCTS_START
});

export const fetchProductsSuccess = products => ({
    type: shopTypes.FETCH_PRODUCTS_SUCCESS,
    payload: products
});

export const fetchCollectionSuccess = collection => ({
    type: shopTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collection
});

export const fetchSubmenuSuccess = submenus => ({
    type: shopTypes.FETCH_SUBMENU_SUCCESS,
    payload: submenus
});

export const fetchCategoriesSuccess = categories => ({
    type: shopTypes.FETCH_CATEGORY_SUCCESS,
    payload: categories
});

export const fetchProductsError = error => ({
    type: shopTypes.FETCH_PRODUCTS_ERROR,
    payload: error
});

export const fetchBrandsSuccess = brands => ({
    type: shopTypes.FETCH_BRANDS_SUCCESS,
    payload: brands
});

export const fetchAllDataAsync = url => {
    return dispatch => {
        dispatch(fetchProductsPending());
        axios.get(url)
            .then(response => {
                dispatch(fetchProductsSuccess(response.data));
                axios.get(`${URL}/products`)
                    .then(response => {
                        dispatch(fetchCollectionSuccess(response.data));
                        axios(`${URL}/categories`)
                            .then(response => {
                                dispatch(fetchCategoriesSuccess(response.data));
                                axios.get(`${URL}/submenu`)
                                    .then(response => {
                                        dispatch(fetchSubmenuSuccess(response.data));
                                        axios.get(`${URL}/brands`)
                                            .then(response =>
                                                dispatch(fetchBrandsSuccess(response.data))
                                            )
                                    }
                                    )
                            })
                    })
            })
            .catch(error => {
                dispatch(fetchProductsError(error))
            })
    }
};





