import React, {useEffect} from 'react';
import {View, Text, StatusBar, Image, Alert} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {asyncGet, asyncClear} from '../../utils/AsyncStorageService';
import NavigationService from '../../utils/NavigationService';
import styles from './SplashScreenStyles';

const SplashScreen = () => {
  useEffect(() => {
    tokenCheck();
    // asyncClear()
  }, []);

  const tokenCheck = async () => {
    const token = await asyncGet ('token');
    console.log('token', token);
    if (token) {
      NavigationService.navigate('App');
    } else {
      NavigationService.navigate('Auth');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Image
          source={require('../../assets/Icon/news.png')}
          style={styles.logo}
        />
        <Text style={styles.text}>Matagi News App</Text>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;
