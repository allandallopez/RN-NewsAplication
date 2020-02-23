import {createStackNavigator} from 'react-navigation-stack';
import NewsListScreen from '../screens/main/newsListScreen/NewsListScreen';
import NewsListDetailScreen from '../screens/main/newsListScreen/newsListDetail/NewsListDetailScreen'
import normalize from 'react-native-normalize';

const MainNavigator = createStackNavigator(
  {
    NewsList: {
      screen: NewsListScreen,
    },
    NewsDetail: {
        screen: NewsListDetailScreen
    }
  },

  {
    initialRouteName: 'NewsList',
    headerMode: 'none',
    mode: 'modal',
    defaultNavigationOptions: {
      headerTintColor: '#65b6e5',
      headerBackTitleVisible: false,
      headerTitleStyle: {
        fontFamily: 'Lato-Bold',
        fontSize: normalize(14),
        color: '#4a4a4a',
        alignSelf: 'center',
      },
      headerTitleAlign: 'center',
    },
  },
);

export default MainNavigator;
