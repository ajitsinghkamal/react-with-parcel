import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import authReducer from 'modules/auth/redux';

const reducer = {
	auth: authReducer,
};

const middleware = {
	...getDefaultMiddleware(),
	// add any other middleware here
};
const store = configureStore({ reducer, middleware });
export default store;
