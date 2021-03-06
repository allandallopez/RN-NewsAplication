import { createStackNavigator } from "react-navigation-stack";
import LoginScreen from "../screens/auth/loginScreen/LoginScreen";
import normalize from "react-native-normalize";

const AuthNavigator = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        headerTitle: "Login",
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontFamily: "Lato-Bold",
          fontSize: normalize(14),
          color: "#4a4a4a"
        }
      }
    }
  },
  {
    initialRouteName: "Login",
    headerMode: "none",
    mode: "card"
  }
);

export default AuthNavigator;
