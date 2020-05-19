import { categoryTypes } from './categoryTypes';

const categoryReducer = (state = {}, actions) => {

    switch (actions.type) {
        case categoryTypes.GET_CATEGORY_PENDING:
            return {
                ...state,
                isFetching: true
            };

        case categoryTypes.GET_CATEGORY:
            return {
                ...actions.payload
            };

        case categoryTypes.GET_CATEGORY_END:
            return {
                ...state,
                isFetching: false
            }

        default: return state;
    }
}

export default categoryReducer;