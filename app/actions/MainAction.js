/**
 * Created by ZHOU on 2016/7/28.
 */
import { MainActionTypes } from '../config/ActionTypes';

export function setTitle(title) {
    return {
        type: MainActionTypes.setTitle,
        title
    };
}