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
		exact: true,
		Component: LoginLayout,
	},
	{
		path: '/register',
		exact: true,
		Component: LoginLayout,
	},
	{
		path: '/',
		Component: MainLayout,
		exact: true,
	},
];
