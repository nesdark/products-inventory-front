import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://191.101.71.70:3000',
});
