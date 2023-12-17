import axios from 'axios';

export const api = axios.create({
  // baseURL: 'http://localhost:7070',
  baseURL: 'https://products-inventory-api.onrender.com',
});
