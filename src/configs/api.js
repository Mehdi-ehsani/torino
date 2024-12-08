import axios from "axios";
import { getCookie } from "../utils/cookie";

const api = axios.create({
	baseURL: process.env.NEXT_PUBLIC_BASE_URL,
	headers: {
		"Content-Type": "application/json",
	},
});
api.interceptors.request.use((request) => {
	const token = getCookie("accessToken");
	if (token) {
		request.headers["Authorization"] = `Bearer ${token}`;
	} 
    return request;
});
api.interceptors.response.use((response) => {
    return response;
  });
  
  export default api;