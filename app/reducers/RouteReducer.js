/**
 * Created by ZHOU on 2016/7/7.
 */

const initialState = {
    scene: {},
};

export default function RouteReducer(state = initialState, action = {}) {
    switch (action.type) {
        // focus action is dispatched when a new screen comes into focus
        case "focus":
            return {
                ...state,
                scene: action.scene,
            };

        // ...other actions
        default:
            return state;
    }
}