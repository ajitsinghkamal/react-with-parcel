import React from 'react';
import { RouterMatch } from 'shared/propShapes';
import { Switch, Route } from 'react-router-dom';
import { makeLazyRoute } from 'router/utils';
import * as pages from 'modules/auth';
import style from './styles.scss';

LoginLayout.propTypes = {
	match: RouterMatch,
};
export default function LoginLayout({ match }) {
	return (
		<div className="flex">
			<aside className={style.aside}></aside>
			<main className="container mx-auto px-4">
				<Switch>
					<Route>{makeLazyRoute(pages.Login)}</Route>
					<Route path={`${match.path}/otp`} exact>
						{makeLazyRoute(pages.Otp)}
					</Route>
					<Route path={`${match.path}/register`} exact>
						{makeLazyRoute(pages.Register)}
					</Route>
					<Route path={`${match.path}/reset`} exact>
						{makeLazyRoute(pages.Reset)}
					</Route>
				</Switch>
			</main>
		</div>
	);
}
