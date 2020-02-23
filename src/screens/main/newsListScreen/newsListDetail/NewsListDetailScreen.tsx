import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
} from 'react-native';
import Styles from './NewsListDetailScreenStyles';
import {NewsArticlesType} from '../../../../types/NewsTypes';
import {useNavigation} from 'react-navigation-hooks';

const NewsListDetailScreen = () => {
    const [data, setData] = useState({} as NewsArticlesType)
  return (
    <SafeAreaView style={Styles.container}>
        <View><Text>Detail Screen</Text></View>
    </SafeAreaView>
  );
};

export default NewsListDetailScreen;
