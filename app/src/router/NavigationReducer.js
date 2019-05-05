import {AppRouter} from "./AppRouter";
import {NavigationActions} from "react-navigation";

const initialState = AppRouter.router.getStateForAction(AppRouter.router.getActionForPathAndParams('Splash'));

export const navigationReducer = (state = initialState, action) => {
    const nextState = defaultGetStateForAction(action, state);
    return nextState || state;
};

const defaultGetStateForAction = (action, state) => {
    const nextState = preventMultiTaps(action, state) ? null : AppRouter.router.getStateForAction(action, state);
    return nextState || state;
};

/**
 * check multi click
 *
 * @returns {boolean}
 */
const preventMultiTaps = (action, state) => {
    const {type, routeName, params} = action;
    return !!(
        state &&
        type === NavigationActions.NAVIGATE &&
        routeName === state.routes[state.routes.length - 1].routeName
        && JSON.stringify(params) === JSON.stringify(state.routes[state.routes.length - 1].params)
    )
};
