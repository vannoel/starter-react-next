import axios from 'axios';
import getConfig from 'next/config';

const env = getConfig().publicRuntimeConfig;

const instance = axios.create({
  baseURL: `${env.API_URL}`,
});

instance.interceptors.request.use(
  (config) => Promise.resolve(config),
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  (response) => (response.status === 200 ? Promise.resolve(response) : Promise.reject(response)),
  (error) => Promise.reject(error)
);

export default instance;
