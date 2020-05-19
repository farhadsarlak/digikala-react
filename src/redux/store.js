import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';

import rootReducer from './rootReducer';

import { fetchAllDataAsync } from './shop/shopActions';
import { URL } from '../config'
import { getSingleProductAsync } from './singleProduct/productAction';
import { getSingleCategoryAsync } from './category/categoryActions';
import { getSingleSubmenuAsync } from './submenu/submenuActions';
import { getSingleCollectionAsync } from './collection/collectionActions';

const middelwares = [thunk];

if (process.env.NODE_ENV === 'development') {
    middelwares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middelwares));
const persistor = persistStore(store);

store.dispatch(fetchAllDataAsync(`${URL}/product`));
store.dispatch(getSingleProductAsync(1));
store.dispatch(getSingleCategoryAsync(1));
store.dispatch(getSingleSubmenuAsync(1));
store.dispatch(getSingleCollectionAsync(1))

export { store, persistor }