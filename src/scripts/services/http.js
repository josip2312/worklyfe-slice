import axios from 'axios';

const API_URL = 'https://dummyjson.com/';

export const http = axios.create({
  baseURL: API_URL,
});
