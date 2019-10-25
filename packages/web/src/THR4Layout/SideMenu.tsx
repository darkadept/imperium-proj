import debug from 'debug';
import React, {useState} from 'react';
import {Menu, MenuItemProps} from 'semantic-ui-react';

const d = debug('app.THR4Layout.SideMenu');

export default function THR4SideMenu() {
	const [activeItem, setActiveItem] = useState<string | undefined>('home');

	const handleItemClick = (e, {name}: MenuItemProps) => setActiveItem(name);

	return (
		<Menu vertical>
			<Menu.Item name="home" active={activeItem === 'home'} onClick={handleItemClick} />
			<Menu.Item name="messages" active={activeItem === 'messages'} onClick={handleItemClick} />
			<Menu.Item name="friends" active={activeItem === 'friends'} onClick={handleItemClick} />
		</Menu>
	);
}
