/**
 * Created by ZHOU on 2016/7/6.
 */
import {combineReducers} from 'redux';
import HomeReducer from './HomeReducer'
import RouteReducer from './RouteReducer'

const RootReducer = combineReducers({
    RouteReducer,
    HomeReducer
});

export default RootReducer;