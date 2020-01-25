import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './assets/styles/tw.pcss';
import './assets/styles/main.scss';
import App from 'core/App';

const root = document.getElementById('root');
ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	root
);
