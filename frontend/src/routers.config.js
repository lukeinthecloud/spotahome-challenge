import About     from './containers/About';
import Contact   from './containers/Contact';
import Home      from './containers/Home';
import HowWeWork from './containers/HowWeWork';

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
	}
];
