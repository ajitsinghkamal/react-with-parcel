import React, { Suspense, lazy } from 'react';
export function makeLazyRoute(
	routeImport,
	routeProps,
	loader = <p>Loading...</p>
) {
	const PromisedComponent = lazy(routeImport);
	return (
		<Suspense fallback={loader}>
			<PromisedComponent {...routeProps} />
		</Suspense>
	);
}
