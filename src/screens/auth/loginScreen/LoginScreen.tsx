import React, { useState, useEffect } from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import Styles from './LoginScreenStyles';
import {GoogleSigninButton, GoogleSignin, statusCodes} from '@react-native-community/google-signin';

const LoginScreen = () => {
    const [userInfo, setUserInfo] = useState()


  return (
    <View style={Styles.container}>
      <View style={Styles.headerView}>
        <Text style={Styles.textStyle}>Jonna</Text>
      </View>
      <View style={Styles.bodyView}>
        {/* <LoadingIndicator isLoading={this.state.isLoading} /> */}
        <TextInput
          placeholder="Please enter email"
          keyboardType="email-address"
          style={[Styles.textInput, Styles.emailInput]}
          // value={this.state.email}
          // onChangeText={email => this.setState({ email })}
        ></TextInput>
        <TextInput
          placeholder="Please enter password"
          secureTextEntry={true}
          style={Styles.textInput}
          // value={this.state.password}
          // onChangeText={password => this.setState({ password })}
        ></TextInput>   

        <GoogleSigninButton
          style={{width: 300, height: 58}}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Light}
        //   onPress={signIn}
          // disabled={this.state.isSigninInProgress}
        />
      </View>
      <View style={Styles.footerView}></View>
    </View>
  );
};

export default LoginScreen;
