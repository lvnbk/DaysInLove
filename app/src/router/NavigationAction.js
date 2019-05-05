import {StackActions, NavigationActions, DrawerActions} from "react-navigation";

export const toggleDrawer = () => {
    return DrawerActions.toggleDrawer();
};

export const navigateToPage = (pageName, data) => {
    return NavigationActions.navigate({
        routeName: pageName,
        params: data
    })
};

export const goBack = () => {
    return NavigationActions.back({});
};

export const resetPage = (page) => {
    return StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({routeName: page})],
    });
};

export const pushScreen = (screen, params) => {
    return StackActions.push({
        routeName: screen,
        params,
    });
};

export const popScreen = (index = 1) => {
    return StackActions.pop({
        n: index,
    });
};
