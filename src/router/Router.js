import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ROUTES from './map';

const PREFIX = '_route_';
export default function Routes() {
	return (
		<Switch>
			{ROUTES.map((ROUTE, index) => {
				const _name = `${PREFIX}${index}`;
				const { path, Component, ...rest } = ROUTE;
				return (
					<Route
						key={_name}
						path={path}
						{...rest}
						render={props => <Component {...props} />}
					></Route>
				);
			})}
		</Switch>
	);
}
