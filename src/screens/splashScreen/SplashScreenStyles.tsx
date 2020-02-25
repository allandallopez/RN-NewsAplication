import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 130,
  },
  logo: {
    width: normalize(200),
    height: normalize(130),
    resizeMode: 'contain',
  },
  text: {
    fontFamily: 'Lato-Bold',
    fontSize: normalize(18),
    letterSpacing: 0.2,
  },
});

export default styles;
