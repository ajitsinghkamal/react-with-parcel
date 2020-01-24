import { shape, string, bool } from 'prop-types';
export const RouterMatch = shape({
	path: string,
	url: string,
	isExact: bool,
});
