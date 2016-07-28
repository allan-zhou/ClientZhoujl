/**
 * Created by ZHOU on 2016/7/28.
 */
import { MainActionTypes } from '../config/ActionTypes';

const initialState = {
    title:'首页'
};

export default function MainReducer(state = initialState, action) {
    switch (action.type) {
        case MainActionTypes.setTitle :
            return Object.assign({}, state, {
                title: action.title
            });
        default:
            return state;
    }
}