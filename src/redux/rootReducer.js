import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import cartReducer from './cart/cartReducer';
import shopReducer from './shop/shopReducer';
import productReducer from './singleProduct/productReducer';

const persistConfig = {
    key: "root",
    storage,
    whiteList: [
        'cart'
    ]
};

const rootReducer = combineReducers({
    cart: cartReducer,
    shop: shopReducer,
    singleProduct: productReducer
});

export default persistReducer(persistConfig, rootReducer)