import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import Styles from './NewsListScreenStyles';
import {NewsArticlesType} from '../../../types/NewsTypes';
import {GetNewsData} from '../../../api/appleApi/GetAppleDataApi';
import NavigationService from '../../../utils/NavigationService';

const NewsListScreen = () => {
  const [listNews, setListNews] = useState([] as NewsArticlesType[]);
  const [search, setSearch] = useState('');

  const getByTitle = (title: string) => {
    GetNewsData(title).then(data => {
      setListNews(data.articles);
    });
  };

  const handleSearch = (value: string) => {
    setSearch(value);
  };

  return (
    <SafeAreaView style={Styles.container}>
      <View style={{height: '10%', flexDirection: 'row', marginTop: 5}}>
        <TextInput
          style={{
            height: 60,
            width: 350,
            borderColor: 'gray',
            borderWidth: 3,
            borderBottomRightRadius: 30,
          }}
          onChangeText={text => handleSearch(text)}
          value={search}
          placeholder={'Find here..'}
        />
        <TouchableOpacity
          style={{height: 60, justifyContent: 'center'}}
          onPress={() => getByTitle(search)}>
          <Image
            style={{width: 40, height: 40, marginLeft: 15}}
            source={require('../../../assets/Icon/search.jpg')}
          />
        </TouchableOpacity>
      </View>
      {listNews.length ? (
        <FlatList
          data={listNews}
          keyExtractor={(item, index) => String(index)}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={Styles.containerThumb}
                onPress={() =>
                  NavigationService.navigate('NewsDetail', {item})
                }>
                <View style={Styles.contentContainer}>
                  <Image
                    style={Styles.newsImage}
                    source={{uri: item.urlToImage}}
                  />
                  <View style={Styles.newsLabelContainer}>
                    <Text style={Styles.newsLabel}>{item.title}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      ) : (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Image
            style={{
              width: 300,
              height: 300,
              resizeMode: 'contain',
              alignSelf: 'center',
            }}
            source={require('../../../assets/emptyNews.jpg')}
          />
          <View>
            <Text
              style={{
                textAlign: 'center',
                fontFamily: 'Lato-Bold',
                fontSize: 14,
                color: '#65b6e5',
              }}>
              Find some interest to read today
            </Text>
            <Text
              style={{
                textAlign: 'center',
                fontFamily: 'Lato-Regular',
                fontSize: 12,
                color: '#9B9B9B',
              }}>
              Your recent searches will appear here
            </Text>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default NewsListScreen;
