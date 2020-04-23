import { post } from 'axios';

export default {
	auth: data => post('v1/auth', data)
};
