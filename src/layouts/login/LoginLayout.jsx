import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { makeLazyRoute } from 'router/utils';
import * as pages from 'modules/login';
export default function LoginLayout({ match }) {
	return (
		<div>
			<aside></aside>
			<main>
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
