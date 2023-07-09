import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const Headers = {
  "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
  "X-RapidAPI-Host": import.meta.env.VITE_API_HOST,
};

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: Headers,
});

export default axiosInstance;
