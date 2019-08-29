import About     from './containers/About';
import Booking   from './containers/Booking';
import Contact   from './containers/Contact';
import Home      from './containers/Home';
import HowWeWork from './containers/HowWeWork';
import Room      from './containers/Room';

export const routes = [
	{
		path: '/',
		isExact: true,
		component: Home,
	},
	{
		path: '/about',
		component: About
	},
	{
		path: '/how-we-work',
		component: HowWeWork
	},
	{
		path: '/contact',
		component: Contact
	},
	{
		path: '/rooms',
		component: Home,
		isExact: true,
		requiresAuthentication: true,
		routes: [
			{
				path: '/rooms/:id/booking',
				component: Booking
			},
			{
				path: '/rooms/:id',
				component: Room
			},
		]
	}
];
