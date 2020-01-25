// import BasicLayout from 'layouts/basic';
import MainLayout from 'layouts/main';
import LoginLayout from 'layouts/login';

/**
 * @routes config file
 * add base level routes or layouts here
 */

export default [
	{
		path: '/login',
		Component: LoginLayout,
	},
	{
		path: '/',
		Component: MainLayout,
	},
];
