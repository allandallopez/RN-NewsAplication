import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import Styles from './SplashScreenStyles';

const SplashScreen = () => {
  return (
    <SafeAreaView style={Styles.container}>
      <View>
        <Text>SplashScreen yeyyy</Text>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;
