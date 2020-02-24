import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    scrollContainer: { flex: 1, marginBottom: normalize(50) },
    descriptionContainer: {
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: normalize(20),
        marginVertical: normalize(20),
    },
    titleText: {
        fontSize: normalize(20),
        fontFamily: 'Lato-Bold',
        color: '#4a4a4a',
        fontWeight: '700',
        alignItems: 'center'
    },
    highlightContainer: {
        borderBottomColor: '#d0d0d0',
        borderBottomWidth: 1,
        marginTop: normalize(10),
    },
    highlightText: {
        fontSize: normalize(16),
        fontFamily: 'Lato-Bold',
        color: '#4a4a4a',
        marginBottom: normalize(10),
        fontWeight: '700'
    },
    highlights: {
        fontSize: normalize(14),
        fontFamily: 'Lato-Regular',
        paddingBottom: normalize(10),
        color: '#4a4a4a',
    },
    borderline: {
        borderBottomColor: '#d0d0d0',
        borderBottomWidth: 1,
        flex: 1,
        alignSelf: 'flex-start',
        paddingVertical: normalize(10),
        width: '100%',
    },
    subTitle: {
        fontSize: normalize(16),
        fontFamily: 'Lato-Bold',
        marginBottom: normalize(10),
        color: '#4a4a4a',
        fontWeight: '700'
    },
    contentRegular: {
        fontSize: normalize(14),
        fontFamily: 'Lato-Regular',
        color: '#4a4a4a',
    },
});

export default styles;
