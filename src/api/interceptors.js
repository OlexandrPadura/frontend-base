import axios from 'axios';

axios.defaults.headers.common = { 'X-Requested-With': 'XMLHttpRequest' };
axios.defaults.baseURL = 'http://localhost:3000';

axios.interceptors.request.use(config => {
	const user = localStorage.getItem('user');
	if (user) {
		const token = JSON.parse(user).token;
		config.headers.Authorization = 'Bearer ' + token;
	}
	return config;
});
