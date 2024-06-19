import axios from "axios";

const instance = axios.create({
	baseURL: "http://localhost:5000/api",
	withCredentials: true,
});

const http = {
	get: instance.get,
	post: instance.post,
	put: instance.put,
	patch: instance.patch,
	delete: instance.delete,
};

axios.interceptors.request.use(
	(req) => req,
	(err) => Promise.reject(err),
);

axios.interceptors.response.use(
	(res) => res,
	(err) => Promise.reject(err),
);

export default http;
