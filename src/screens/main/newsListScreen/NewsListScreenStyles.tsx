import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  containerThumb: {flex: 1, paddingHorizontal: 2},
  contentContainer: {
    marginHorizontal: 5,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#9b9b9b',
    borderRadius: 8,
  },
  newsImage: {
    height: normalize(100, 'height'),
    width: normalize(365, 'width'),
    resizeMode: 'cover',
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  newsLabel: {
    marginTop: normalize(7),
    marginBottom: normalize(19),
    paddingRight: normalize(6),
    color: '#4a4a4a',
    fontFamily: 'Lato-Bold',
    fontSize: normalize(14),
    // maxWidth: normalize(148, 'width'),
  },
  newsLabelContainer: {
    paddingTop: 3,
    paddingLeft: 6,
    // maxWidth: 143,
  },
});

export default styles;
