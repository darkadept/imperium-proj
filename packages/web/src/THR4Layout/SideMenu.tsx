import debug from 'debug';
import React, {useContext, useState} from 'react';
import {Menu, MenuItemProps} from 'semantic-ui-react';
import {MenuContext} from './THR4Layout';

const d = debug('app.THR4Layout.SideMenu');

export default function SideMenu(): JSX.Element {
	const [activeItem, setActiveItem] = useState<string | undefined>('home');
	const [state, setMenuState] = useContext(MenuContext);

	const handleItemClick = (e, {name}: MenuItemProps) => {
		setActiveItem(name);
		setMenuState(prevState => ({...prevState, showStatusBar: name !== 'Hide Menu Bar'}));
	};

	return (
		<Menu vertical>
			<Menu.Item name="home" active={activeItem === 'home'} onClick={handleItemClick} />
			<Menu.Item name="messages" active={activeItem === 'messages'} onClick={handleItemClick} />
			<Menu.Item name="friends" active={activeItem === 'friends'} onClick={handleItemClick} />
			<Menu.Item name="Hide Menu Bar" active={activeItem === 'Hide Menu Bar'} onClick={handleItemClick} />
		</Menu>
	);
}
