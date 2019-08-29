import React from 'react';

import { Route } from 'react-router-dom';

export default function RouteWithSubRoutes(route) {
	function _renderRoute() {
		return (
			<Route
				exact={route.isExact}
				path={route.path}
				render={props => (
					<route.component exact={props.isExact} {...props} routes={route.routes}/>
				)}
			/>
		)
	}

	return (
		<>
			{_renderRoute()}
		</>
	);
}
