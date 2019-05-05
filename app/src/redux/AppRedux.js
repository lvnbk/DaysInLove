import {applyMiddleware, combineReducers, createStore} from 'redux';
import {navigationReducer} from "../router/NavigationReducer";
import thunk from 'redux-thunk';
import {createReactNavigationReduxMiddleware, reduxifyNavigator} from "react-navigation-redux-helpers";
import {AppRouter} from "../router/AppRouter";
import {connect} from "react-redux";

const reducer = combineReducers({
    nav: navigationReducer
});

const navMiddleware = createReactNavigationReduxMiddleware(
    "root",
    state => state.nav,
);

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk, navMiddleware));

const AppNav = reduxifyNavigator(AppRouter, "root");

const mapStateToProps = (state) => ({
    state: state.nav,
});

export const AppWithNavigationState = connect(mapStateToProps)(AppNav);