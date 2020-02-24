import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text, Image} from 'react-native';
import Styles from './NewsListDetailScreenStyles';
import {NewsArticlesType} from '../../../../types/NewsTypes';
import {useNavigation} from 'react-navigation-hooks';

const NewsListDetailScreen = () => {
  const [itemData, setItemData] = useState({} as NewsArticlesType);

  const {getParam} = useNavigation();

  useEffect(() => {
    const item = getParam('item', '');
    console.log('ini heyyy', item);
    setItemData(item);
  });

  return (
    <SafeAreaView style={Styles.container}>
      <View
        style={{
          backgroundColor: 'green',
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
        <Image
          style={{height: 100, width: 250, marginLeft: 100}}
          source={{uri: itemData.urlToImage}}
        />
        <Text style={{fontSize: 20, fontWeight: '700'}}>{itemData.title}</Text>
        <Text style={{fontSize: 13, fontWeight: '600'}}>
          Publisher : {itemData.author}
        </Text>
        <Text
        numberOfLines={4} 
        style={{fontSize: 15, fontWeight: '600'}}>
          {' '}
          {itemData.description}
        </Text>
        <Text style={{fontSize: 15, fontWeight: '600'}}>
          {' '}
          {itemData.content}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default NewsListDetailScreen;
