import {cartActionTypes} from "./cartTypes";

export const mouseInHidden=()=>({
  type: cartActionTypes.MOUSE_IN_HIDDEN
});

export const mouseOutHidden=()=>({
  type: cartActionTypes.MOUSE_OUT_HIDDEN
});

export const addItemToCart= item =>({
  type:cartActionTypes.ADD_ITEM,
  payload:item
});

export const removeItemFromCart=item=>({
  type:cartActionTypes.REMOVE_ITEM,
  payload: item
});

export const decrement= item=>({
  type:cartActionTypes.DEC_ITEM,
  payload:item
});