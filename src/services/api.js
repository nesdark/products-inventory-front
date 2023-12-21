import axios from 'axios';

export const api = axios.create({
  // baseURL: 'http://15.229.71.122',
  baseURL: 'https://15.229.71.122:7070',
});
