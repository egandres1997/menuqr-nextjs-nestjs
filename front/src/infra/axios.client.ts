import axios, { AxiosError } from 'axios';

export const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

API.interceptors.response.use(
  (config) => {
    return config;
  },
  (error) => {
    if (
      error instanceof AxiosError &&
      error.response?.status === 401 &&
      !error.response.config.url?.includes('/login') &&
      typeof window !== 'undefined'
    ) {
      window.location.replace('/logout');
    }
    return Promise.reject(error);
  },
);
