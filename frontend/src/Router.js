import React                             from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { routes }         from './routers.config';
import RouteWithSubRoutes from './Components/RouteWithSubRouter';
import MainNavigation     from './Components/MainNavigation';

export default function AppRouter() {
	return (
		<Router>
			<div className='container-fluid'>
				<MainNavigation/>
				{
					routes.map((route, index) => (
							<RouteWithSubRoutes key={index} {...route} />
						)
					)
				}
			</div>
		</Router>
	);
}
