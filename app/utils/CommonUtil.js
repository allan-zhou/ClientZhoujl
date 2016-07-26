/**
 * Created by ZHOU on 2016/7/25.
 */

export const naviGoBack = (navigator) => {
    if (navigator && navigator.getCurrentRoutes().length > 1) {
        navigator.pop();
        return true;
    }
    return false;
};