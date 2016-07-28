/**
 * Created by ZHOU on 2016/7/6.
 */
import * as types from '../config/ActionTypes';

const initialState = {
    loading: false,
    typeList: {}
};

export default function HomeReducer(state = initialState, action) {
    switch (action.type) {

        default:
            return state;
    }
}
