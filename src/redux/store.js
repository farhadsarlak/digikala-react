import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';

import rootReducer from './rootReducer';

import { fetchAllDataAsync } from './shop/shopActions';
import { URL } from '../config'

const middelwares = [thunk];

if (process.env.NODE_ENV === 'development') {
    middelwares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middelwares));
const persistor = persistStore(store);

store.dispatch(fetchAllDataAsync(`${URL}/product`))

export { store, persistor }