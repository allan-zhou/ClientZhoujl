/**
 * Created by ZHOU on 2016/7/5.
 */
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger'
import RootReducer from '../reducers/RootReducer';

const createStoreWithMiddleware = applyMiddleware(thunk,createLogger())(createStore);

export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(RootReducer, initialState);

    return store;
}