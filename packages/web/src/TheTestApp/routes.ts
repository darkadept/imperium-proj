import TestPageOne from './TestPageOne/TestPageOne';
import HomePage from './THRHomePage';
import Postlist from './WordpressTest/postlist';

export default [
	{
		path: '/testPageOne',
		content: TestPageOne,
		exact: true,
	},
	{
		path: '/thr/:page?',
		content: HomePage,
		exact: true,
	},
	{
		path: '/wordpress',
		content: Postlist,
		exact: true,
	},
];
