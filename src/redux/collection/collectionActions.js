import { collectionTypes } from './collectionTypes';
import axios from 'axios';
import { URL } from '../../config';

export const getSingleCollectionPending = () => ({
    type: collectionTypes.GET_COLLECTION_PENDING
});

export const getSingleCollectionSuccess = collection => ({
    type: collectionTypes.GET_COLLECTION,
    payload: collection
});

export const getSingleCollectionEnd = () => ({
    type: collectionTypes.GET_COLLECTION_END
});

export const getSingleCollectionAsync = id => {
    return dispatch => {
        dispatch(getSingleCollectionPending());
        axios.get(`${URL}/products/${id}`)
            .then(response =>
                dispatch(getSingleCollectionSuccess(response.data)));
        dispatch(getSingleCollectionEnd());
    }
}
