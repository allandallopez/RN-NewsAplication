import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
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

  const goToNewsDetail = (item: object) => {
    NavigationService.navigate('NewsDetail');
  };

  return (
    <SafeAreaView style={Styles.container}>
      <View style={{height: '25%', backgroundColor: 'blue'}}></View>
      {listNews.length > 0 && (
        <FlatList
          data={listNews}
          keyExtractor={(item, index) => String(index)}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  goToNewsDetail(item);
                }}
                style={{
                  backgroundColor: '#3498db',
                  marginBottom: 10,
                  borderRadius: 20,
                  flexDirection: 'column',
                }}>
                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: '700',
                    marginLeft: 13,
                  }}>
                  {item.title}
                </Text>
                <Text style={{fontSize: 13, marginLeft: 13}}>
                  {item.description}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      )}
      <TextInput
        style={{height: 60, borderColor: 'gray', borderWidth: 1}}
        onChangeText={text => handleSearch(text)}
        value={search}
      />
      <TouchableOpacity
        style={{height: 50, backgroundColor: 'red'}}
        onPress={() => getByTitle(search)}>
        <Text>Search</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default NewsListScreen;
