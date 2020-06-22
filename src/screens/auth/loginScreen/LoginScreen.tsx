import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import Styles from './LoginScreenStyles';
import {
  GoogleSigninButton,
  GoogleSignin,
} from '@react-native-community/google-signin';
import NavigationService from '../../../utils/NavigationService';
import {asyncStore} from '../../../utils/AsyncStorageService';
const LoginScreen = () => {
  const [isDisable, useIsDisable] = useState(false);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('token', userInfo.idToken);
      await asyncStore('token', userInfo.idToken);
      useIsDisable(true);
      NavigationService.navigate('App');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['HERE IT IS YOUR GOOGLE API'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: 'HERE IT IS YOUR WEB CLIENT ID (IM USING FIREBASE)', // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      forceConsentPrompt: true, // [Android] if you want to show the authorization prompt at each login.
    });
  }, []);

  return (
    <View style={Styles.container}>
      <Text style={Styles.headTitle}>Hello</Text>
      <Image
        style={Styles.userIcon}
        source={require('../../../assets/Icon/user.jpg')}
      />
      <GoogleSigninButton
        style={{width: 300, height: 70}}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Light}
        onPress={signIn}
        disabled={isDisable}
      />
    </View>
  );
};

export default LoginScreen;
