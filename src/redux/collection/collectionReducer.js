import { collectionTypes } from './collectionTypes';

const collectionReducer = (state = {}, actions) => {

    switch (actions.type) {

        case collectionTypes.GET_COLLECTION_PENDING:
            return {
                ...state,
                isLoading: true
            }

        case collectionTypes.GET_COLLECTION:
            return {
                ...actions.payload
            }

        case collectionTypes.GET_COLLECTION_END:
            return {
                ...state,
                isLoading: false
            }

        default: return state;
    }
}

export default collectionReducer;