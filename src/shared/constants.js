/**
 * the basic level of route permission check
 * supported currently
 * @ANON : when the route can be open anonymously only
 * @PUBLIC: routes which can be opened by either anonymous or authenticated users
 * @PRIVATE: routes which should redirect for authentication
 * and should not allow anonymous users
 *
 */
export const PERMISSIONS = Object.freeze({
	ANON: 'ANON',
	PRIVATE: 'PRIVATE',
	PUBLIC: 'PUBLIC',
});
