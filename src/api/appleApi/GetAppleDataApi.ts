import axios from 'axios';
import {NewsDataType} from '../../types/NewsTypes';

export const GetNewsData = async () => {
  const result: NewsDataType = await axios
    .get(
      `http://newsapi.org/v2/everything?q=apple&from=2020-02-21&to=2020-02-21&sortBy=popularity&apiKey=9ad7c1a0d1624d18abeccddc900f9cd8`,
    )
    .then(({data}) => {
      console.log('dataa', data);
      return data.data;
    })
    .catch(err => err);
  return result;
};
