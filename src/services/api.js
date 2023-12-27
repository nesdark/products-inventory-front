import axios from 'axios';

export const api = axios.create({
  // baseURL: 'http://localhost:7070',
  baseURL: 'http://191.101.71.70:3000/',
});
