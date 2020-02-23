import axios from 'axios';
import {NewsDataType} from '../../types/NewsTypes';

export const GetNewsData = async () => {
  const result: NewsDataType = await axios
    .get(
      `http://newsapi.org/v2/everything?qInTitle=soccer&apiKey=9ad7c1a0d1624d18abeccddc900f9cd8`,
    )
    .then(({data}) => {
      return data;
    })
    .catch(err => err);
  return result;
};
