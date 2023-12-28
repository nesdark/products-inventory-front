import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://15.229.71.122:6060',
  // baseURL: 'http://192.168.15.80:7070',
});

// npm run dev -- --host --port 80
