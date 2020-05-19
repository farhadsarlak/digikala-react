import { submenuTypes } from './submenuTypes';

const submenuReducer = (state = {}, actions) => {

    switch (actions.type) {

        case submenuTypes.GET_SUBMENU_START:
            return {
                ...state,
                isFetching: true
            };

        case submenuTypes.GET_SUBMENU:
            return { ...actions.payload };

        case submenuTypes.GET_SUBMENU_END:
            return {
                ...state,
                isFetching: false
            };

        default: return state

    }
}

export default submenuReducer;