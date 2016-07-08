/**
 * Created by ZHOU on 2016/7/6.
 */
import * as types from '../constants/ActionTypes';

const initialState = {
    loading: false,
    typeList: {}
};

export default function HomeReducer(state = initialState, action) {
    switch (action.type) {
        case types.FETCH_HOME:
            return Object.assign({}, state, {
                loading: true
            });
        case types.RECEIVE_HOME:
            return Object.assign({}, state, {
                loading: false,
                typeList: action.typeList
            });
        default:
            return state;
    }
}
