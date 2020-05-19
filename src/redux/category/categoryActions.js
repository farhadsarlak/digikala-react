import { categoryTypes } from './categoryTypes';
import axios from 'axios';
import { URL } from '../../config';

export const getSingleCategoryPending = () => ({
    type: categoryTypes.GET_CATEGORY_PENDING
});

export const getSingleCategorySuccess = category => ({
    type: categoryTypes.GET_CATEGORY,
    payload: category
});

export const getSingleCategoryEnd = () => ({
    type: categoryTypes.GET_CATEGORY_END
});

export const getSingleCategoryAsync = id => {
    return dispatch => {
        dispatch(getSingleCategoryPending());
        axios.get(`${URL}/categories/${id}`)
            .then(response =>
                dispatch(getSingleCategorySuccess(response.data)));
        dispatch(getSingleCategoryEnd());
    }
}
