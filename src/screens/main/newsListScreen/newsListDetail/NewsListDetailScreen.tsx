import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text, Image, ScrollView} from 'react-native';
import styles from './NewsListDetailScreenStyles';
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
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.descriptionContainer}>
          <View style={{marginBottom: 10}}>
            <Text style={styles.titleText}>"{itemData.title}"</Text>
          </View>
          <Image
            style={{height: 300, width: 400}}
            source={{uri: itemData.urlToImage}}
          />
          <View style={styles.highlightContainer}>
            <Text style={styles.highlightText}>Desctription</Text>
            <Text style={styles.highlights}>{itemData.description}</Text>
          </View>

          <View style={styles.borderline}>
            <Text style={styles.subTitle}>Content</Text>
            <Text style={styles.contentRegular}>
              {itemData &&
                itemData.content &&
                itemData.content.substring(0, 260)}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewsListDetailScreen;
