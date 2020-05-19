import { productTypes } from './productTypes';
import axios from 'axios';
import { URL } from '../../config';


export const getSingleProductPending = () => ({
    type: productTypes.GET_PRODUCT_START
});

export const getSingleProductSuccess = product => ({
    type: productTypes.GET_PRODUCT,
    payload: product
});

export const getSingleProductEnd = () => ({
    type: productTypes.GET_PRODUCT_END
});

export const getSingleProductAsync = id => {
    return dispatch => {
        dispatch(getSingleProductPending());
        axios.get(`${URL}/product/${id}`)
            .then(response =>
                dispatch(getSingleProductSuccess(response.data)));
        dispatch(getSingleProductEnd());
    }
}
