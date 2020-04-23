import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import user from './user';
import form from './form';

const rootReducer = history =>
	combineReducers({
		router: connectRouter(history),
		user,
		form
	});

export default rootReducer;
