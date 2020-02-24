import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import SplashScreen from '../screens/splashScreen/SplashScreen';
import MainNavigator from './MainNavigator';
import AuthNavigator from './AuthNavigator';

const RootNavigator = createSwitchNavigator(
  {
    Init: SplashScreen,
    Auth: AuthNavigator,
    App: {
      screen: MainNavigator,
      path: '',
    },
  },
  {
    initialRouteName: 'Auth',
  },
);

export default createAppContainer(RootNavigator);
