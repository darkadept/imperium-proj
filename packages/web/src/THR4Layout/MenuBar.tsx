import debug from 'debug';
import React, {useState} from 'react';
import {Menu, MenuItemProps} from 'semantic-ui-react';

const d = debug('app.THR4Layout.HeaderBar');

export default function MenuBar() {
	const menuItems = ['0000 - Client Name', 'Some', 'More', 'Information', 'Goes', 'Here'];
	const [activeItem, setActiveItem] = useState<string | undefined>(menuItems[0]);

	const handleItemClick = (e, {name}: MenuItemProps) => setActiveItem(name);

	return (
		<Menu style={{margin: 0, borderRadius: 0}} borderless color="grey" inverted>
			{menuItems.map(item => (
				<Menu.Item key={item} name={item}>
					{item}
				</Menu.Item>
			))}
		</Menu>
	);
}
