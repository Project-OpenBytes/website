import axios from 'axios';
import { Cache } from '~/src/utils/cache';

const serviceV2 = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_BASE_URL_V2,
  timeout: 10000, // timeout range
  proxy: process.env.AXIOS_PROXY_PORT
    ? {
        host: 'localhost',
        port: Number(process.env.AXIOS_PROXY_PORT),
      }
    : false,
});

serviceV2.interceptors.request.use(
  (config) => {
    return config;
  },
  (error: any) => {
    Promise.reject(error);
  },
);

serviceV2.interceptors.response.use(
  (res) => res.data,
  (error: any) => Promise.reject(error),
);

export default serviceV2;
