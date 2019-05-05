import {ACTION_HIDE_LOADING, ACTION_SHOW_LOADING} from "../Action";

export const loadingState = {
    loading: false
};

export const loadingReducer = (state = loadingState, action) => {
    switch (action.type) {
        case ACTION_SHOW_LOADING:
            return {...state, loading: true};
        case ACTION_HIDE_LOADING:
            return {...state, loading: false};
        default:
            return state;
    }
};