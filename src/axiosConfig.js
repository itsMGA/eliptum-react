// axiosConfig.js
import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_HOST || "http://127.0.0.1:8000/", // Default host
});

export default axiosInstance;