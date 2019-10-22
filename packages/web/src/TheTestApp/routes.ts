import TestPageOne from './TestPageOne/TestPageOne';
import HomePage from './THRHomePage';

export default [
	{
		path: '/testPageOne',
		content: TestPageOne,
		exact: true,
	},
	{
		path: '/homepage',
		content: HomePage,
		exact: true,
	},
];
