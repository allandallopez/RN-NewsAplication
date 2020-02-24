import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerView: {
    flex: 0.2,

    alignItems: 'center',
    justifyContent: 'center',
  },
  bodyView: {
    flex: 0.4,

    alignItems: 'center',
    justifyContent: 'center',
  },
  footerView: {
    flex: 0.4,

    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 50,
    color: 'white',
    backgroundColor: 'orange',
  },
  textInput: {
    padding: 12,
    borderRadius: 30,
    borderColor: 'gray',
    fontWeight: 'bold',
    width: '80%',
    height: 50,
    backgroundColor: 'grey',
  },
  emailInput: {
    bottom: 20,
  },
  touchableStyle: {
    top: 20,
    backgroundColor: 'black',
    width: '80%',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButton: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default Styles;
