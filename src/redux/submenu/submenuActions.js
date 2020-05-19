import { submenuTypes } from "./submenuTypes";
import axios from 'axios';
import { URL } from '../../config';

export const getSingleSubmenuPending = () => ({
    type: submenuTypes.GET_SUBMENU_START
});

export const getSingleSubmenuSuccess = submenu => ({
    type: submenuTypes.GET_SUBMENU,
    payload: submenu
});

export const getSingleSubmenuEnd = () => ({
    type: submenuTypes.GET_SUBMENU_END
});

export const getSingleSubmenuAsync = id => {
    return dispatch => {
        dispatch(getSingleSubmenuPending());
        axios.get(`${URL}/submenu/${id}`)
            .then(response =>
                dispatch(getSingleSubmenuSuccess(response.data)));
        dispatch(getSingleSubmenuEnd());
    }
}