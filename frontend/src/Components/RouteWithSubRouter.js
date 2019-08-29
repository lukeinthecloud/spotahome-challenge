import React from 'react';

import { Route, Switch } from 'react-router-dom';

export default function RouteWithSubRoutes(route) {
	function _renderRoute() {
		console.log(route.routes);

		if (route.routes) {
			return (
				<>
					<Route
						exact={route.isExact}
						path={route.path}
						render={props => (
							<route.component exact={props.isExact} {...props} routes={route.routes}/>
						)}
					/>
					<Switch>
						{
							route.routes.map((route, index) => (
								<Route
									key={index}
									exact={route.isExact}
									path={route.path}
									render={props => (
										<route.component exact={props.isExact} {...props} routes={route.routes}/>
									)}
								/>
							))
						}
					</Switch>
				</>
			)
		}
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
