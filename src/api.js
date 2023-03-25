import axios from "axios";


export const api = axios.create({
    withCredentials: true,
	baseURL: 'http://127.0.0.1:5000',
	headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
	credentials: 'include',
})