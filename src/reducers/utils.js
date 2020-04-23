import api from '../api/index';
import { push } from 'connected-react-router';
import { toastr } from 'react-redux-toastr';

export const backendCall = ({ before, after, onSuccess, onError, method, params = {} }) => async (dispatch, getState) => {
	if (before) {
		dispatch(before());
	}

	try {
		const result = await method(api)(params);
		if (onSuccess) {
			if (onSuccess.type) {
				dispatch(onSuccess(result.data));
			} else {
				onSuccess(result.data);
			}
		}
		return result.data;
	} catch (error) {
		console.log(error, error.response, 'error');
		if (onError) {
			if (onError.type) {
				dispatch(onError(error.response));
			} else {
				onError(error.response);
			}
			return;
		}
		const {
			response: { status }
		} = error;

		switch (status) {
			case 401: {
				dispatch(push('/login'));
				localStorage.clear('user');
				break;
			}
			default: {
				toastr.error('Error', error.response.data.message || 'Something went wrong');
				break;
			}
		}
	} finally {
		if (after) {
			if (after.type) {
				dispatch(after());
			} else {
				after();
			}
		}
	}
};
