import debug from 'debug';
import get from 'lodash/get';
import React, {useContext} from 'react';
import {Menu} from 'semantic-ui-react';
import {MenuContext} from './THR4Layout';

const d = debug('app.THR4Layout.MenuBar');

export default function MenuBar() {
	const [state] = useContext(MenuContext);
	const menuItems = [
		`${get(state, 'currentUser.profile.id', '0000')}
		- ${get(state, 'currentUser.profile.firstName', '0000')}
		${get(state, 'currentUser.profile.lastName', '0000')}`,
		'Some',
		'More',
		'Information',
		'Goes',
		'Here',
		'I dont think we want to hide this bar, It leads to a bad user experience',
	];

	return (
		<Menu style={{margin: 0, borderRadius: 0, backgroundColor: 'rgb(45, 45, 45)'}} borderless inverted>
			{menuItems.map(item => (
				<Menu.Item key={item} name={item} style={{color: 'rgb(189, 197, 73)'}}>
					{item}
				</Menu.Item>
			))}
		</Menu>
	);
}
