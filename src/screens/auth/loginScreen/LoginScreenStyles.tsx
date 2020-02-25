import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';

const Styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  userIcon: {
    width: normalize(300),
    height: normalize(300),
    marginTop: 50,
    marginBottom: 50,
  },
  headTitle: {
      fontSize: normalize(50),
      fontWeight: '700',
      fontFamily: 'Lato-Bold'
  }
});

export default Styles;
