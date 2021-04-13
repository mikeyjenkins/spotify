import axios from 'axios';
import { setAuthHeader } from './functions';

export const get = async (url, params) => {
  setAuthHeader();
  const result = await axios.get(url, params);
  console.log(result)
  return result;
};

export const post = async (url, params) => {
  setAuthHeader();
  const result = await axios.post(url, params);
  return result;
};

export const put = async (url, params) => {
  setAuthHeader();
  const result = await axios.put(url, params);
  return result
}