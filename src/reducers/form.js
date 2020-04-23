import { createReducer, createAction } from '@reduxjs/toolkit';

const initState = {};

export const set = createAction('form/set');
export const clear = createAction('form/clear');

export default createReducer(initState, {
	[set]: (state, action) => ({
		...state,
		[action.payload.formName]: {
			...state[action.payload.formName],
			...action.payload.data
		}
	}),
	[clear]: (state, action) => ({
		...state,
		[action.payload.formName]: {}
	})
});
