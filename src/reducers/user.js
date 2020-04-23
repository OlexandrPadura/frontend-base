import { createReducer, createAction } from '@reduxjs/toolkit';

const initState = {};

const set = createAction('user/set');

export const initUser = data => async dispatch => {
	if (data) {
		dispatch(set(data));
		localStorage.setItem('user', data);
	} else {
		const user = localStorage.getItem('user');
		if (user) {
			dispatch(set(user));
		}
	}
};

export default createReducer(initState, {
	[set]: (state, action) => ({ ...action.payload })
});
