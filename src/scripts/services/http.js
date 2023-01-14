import axios from 'axios';

const API_URL = process.env.API_URL;

export const http = axios.create({
  baseURL: API_URL,
});
