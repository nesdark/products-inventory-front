import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://191.101.71.70:6060',
  // baseURL: 'http://localhost:6060',
});

// npm run dev -- --host --port 80
