import axios from 'axios';

export const api = axios.create({
  // baseURL: 'http://15.229.71.122:6060',
  baseURL: 'http://localhost:6060',
});

// npm run dev -- --host --port 80
