import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import Styles from './LoginScreenStyles';

const LoginScreen = () => {
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

        <TouchableOpacity
          style={Styles.touchableStyle}
          // onPress={this.onSubmit}
        >
          <Text style={Styles.loginButton}>Login here</Text>
        </TouchableOpacity>
      </View>
      <View style={Styles.footerView}></View>
    </View>
  );
};

export default LoginScreen;
