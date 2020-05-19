import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import cartReducer from './cart/cartReducer';
import shopReducer from './shop/shopReducer';
import productReducer from './singleProduct/productReducer';
import submenuReducer from './submenu/submenuReducer';
import categoryReducer from './category/categoryReducer';
import collectionReducer from './collection/collectionReducer';

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
    singleProduct: productReducer,
    singleSubmenu: submenuReducer,
    singleCategory: categoryReducer,
    singleCollection: collectionReducer
});

export default persistReducer(persistConfig, rootReducer)