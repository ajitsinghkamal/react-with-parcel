import { PERMISSIONS } from 'shared/constants';
import BasicLayout from 'layouts/basic';
import MainLayout from 'layouts/main';
/**
 * @routes config file
 * each set is distinguished by their module
 * each module will be an independent collection of pages
 * which would each map to a seperate path
 */
export default [
	{
		path: '/',
		component: BasicLayout,
		children: [
			{
				path: '/login',
				isExact: true,
				component: import('../modules/login/LoginPage'),
				permissions: PERMISSIONS.NO_AUTH,
			},
			{
				path: '/register',
				isExact: true,
				component: import('../modules/login/RegisterPage'),
				permissions: PERMISSIONS.ANON,
			},
			{
				path: '/forgot',
				isExact: true,
				component: import('../modules/login/ForgotPassPage'),
				permissions: PERMISSIONS.ANON,
			},
		],
	},
	{
		path: '',
		component: MainLayout,
		children: [
			{
				path: '/',
				isExact: true,
				component: import('../modules/home/HomePage'),
				permissions: PERMISSIONS.PRIVATE,
			},
		],
	},
];
