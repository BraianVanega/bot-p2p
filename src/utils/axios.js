import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

axiosInstance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${process.env.NEXT_PUBLIC_BINANCE_API_KEY}`;
  return config;
});

export default axiosInstance;
