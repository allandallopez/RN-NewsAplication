import { NavigationActions, StackActions } from "react-navigation";
import { NavigationStackProp } from "react-navigation-stack";

let navigator: NavigationStackProp;
const setTopLevelNavigator = (navigatorRef: any) => {
  navigator = navigatorRef;
};

const navigate = (routeName: string, params?: object) => {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params
    })
  );
};

const push = (routeName: string, params?: object) => {
  navigator.dispatch(
    StackActions.push({
      routeName,
      params
    })
  );
};

const popToTop = () => {
  navigator.dispatch(StackActions.popToTop());
};

const replace = (routeName: string, params?: object) => {
  navigator.dispatch(StackActions.replace({ routeName, params }));
};

//use this shit
const goBack = (n: number) => {
  navigator.dispatch(StackActions.pop({ n: n }));
};

export default {
  navigate,
  push,
  replace,
  popToTop,
  setTopLevelNavigator,
  goBack
};
