import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import SplashScreen from '../screens/splashScreen/SplashScreen';
import MainNavigator from './MainNavigator';

const RootNavigator = createSwitchNavigator(
  {
    Init: SplashScreen,
    App: {
      screen: MainNavigator,
      path: '',
    },
  },
  {
    initialRouteName: 'App',
  },
);

export default createAppContainer(RootNavigator);
