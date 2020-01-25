import React from 'react';
import { Provider } from 'react-redux';
import Router from '~/src/router/';
import store from './store';
export default function App() {
	return (
		<Provider store={store}>
			<Router />
		</Provider>
	);
}
