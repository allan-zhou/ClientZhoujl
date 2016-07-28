/**
 * Created by ZHOU on 2016/7/6.
 */
import {combineReducers} from 'redux';
import HomeReducer from './HomeReducer'
import RouteReducer from './RouteReducer'
import MainReducer from './MainReducer'

const RootReducer = combineReducers({
    RouteReducer,
    HomeReducer,
    MainReducer,
});

export default RootReducer;