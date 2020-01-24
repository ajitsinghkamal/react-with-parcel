import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ROUTES from './config';
export default function Routes() {
	return (
		<Switch>
			{ROUTES.map((ROUTE, index) => {
				<Route
					key={`_route_${index}`}
					path={ROUTE.path}
					exact={ROUTE.isExact}
					component={ROUTE.component}
				>
					{ROUTE.children &&
						ROUTE.children.map((child, i) => {
							const { path, ...rest } = child;
							<Route
								key={`_route_${index}_${i}`}
								path={path}
								{...rest}
								render={() => React.lazy(() => child.component)}
							></Route>;
						})}
				</Route>;
			})}
		</Switch>
	);
}
