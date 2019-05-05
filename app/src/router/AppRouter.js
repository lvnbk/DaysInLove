import React from 'react';
import {addNavigationHelpers, createStackNavigator} from "react-navigation";
import {connect} from "react-redux";

export const AppRouter = createStackNavigator({

}, {
    headerMode: 'none',
    transitionConfig: () => {
        return {
            screenInterpolator: (sceneProps: NavigationSceneRendererProps) => {
                const { position, scene, progress } = sceneProps;
                const { index } = scene;
                const opacity = position.interpolate({
                    inputRange: [index - 1, index, index + 0.999, index + 1],
                    outputRange: [0, 1, 1, 0],
                });

                const translateY = position.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: [150, 0, 0],
                });

                return { opacity, transform: [{ translateY }] };
            }
        }
    }
});

const AppWithNavigationState = ({dispatch, nav}) => (
    <AppRouter
        navigation={addNavigationHelpers({dispatch, state: nav})}
    />
);

const mapStateToProps = state => ({
    nav: state.nav,
});

export default connect(mapStateToProps, null)(AppWithNavigationState);