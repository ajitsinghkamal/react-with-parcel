import React from 'react';
import { RouterMatch } from 'shared/propShapes';
import { Switch, Route } from 'react-router-dom';
import { makeLazyRoute } from 'router/utils';
import * as pages from 'modules/auth';
import css from './styles.scss';
import cx from 'classNames';

LoginLayout.propTypes = {
	match: RouterMatch,
};
export default function LoginLayout({ match }) {
	return (
		<div className="h-screen flex">
			<aside className={cx('w-1/4', css.aside)}></aside>
			<main className="flex flex-1 flex-col justify-center mx-auto px-20">
				<div>
					<h1 className="text-2xl font-bold">
						Welcome to Doctor’s Dashboard
					</h1>
				</div>
				<div className="py-2">
					<Switch>
						<Route path={`${match.path}/otp`} exact>
							{makeLazyRoute(pages.Otp)}
						</Route>
						<Route path={`${match.path}/register`} exact>
							{makeLazyRoute(pages.Register)}
						</Route>
						<Route path={`${match.path}/reset`} exact>
							{makeLazyRoute(pages.Reset)}
						</Route>
						<Route>{makeLazyRoute(pages.Login)}</Route>
					</Switch>
				</div>
			</main>
		</div>
	);
}
