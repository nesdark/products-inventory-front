import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://191.101.71.70:3000',
});
