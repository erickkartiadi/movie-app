import axios from 'axios';

const URL = 'http://www.omdbapi.com';
const apiKey = 'fab9e9de';

const API = axios.create({
  baseURL: URL,
  responseType: 'json',
});

API.interceptors.request.use((config) => {
  // eslint-disable-next-line no-param-reassign
  config.params = {
    apiKey,
    ...config.params,
  };

  return config;
});

export default API;
