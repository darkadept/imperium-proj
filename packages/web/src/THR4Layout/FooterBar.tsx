import debug from 'debug';
import React from 'react';
import {Menu} from 'semantic-ui-react';

const d = debug('app.THR4Layout.HeaderBar');

export default function HeaderBar() {
	return (
		<Menu inverted borderless style={{borderRadius: 0, margin: 0}}>
			<Menu.Item name="home" style={{color: 'rgb(217, 128, 48)'}}>
				Footer Bar
			</Menu.Item>
			<Menu.Menu position="right">
				<Menu.Item name="logout" onClick={() => {}}>
					Logged in as: Jonathan Spomer
				</Menu.Item>
			</Menu.Menu>
		</Menu>
	);
}
