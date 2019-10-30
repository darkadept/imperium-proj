import debug from 'debug';
import React from 'react';
import {Menu, Input, Icon, Popup} from 'semantic-ui-react';

const d = debug('app.THR4Layout.HeaderBar');

interface Props {
	userMenu?: JSX.Element;
}

export default function HeaderBar(props: Props) {
	return (
		<Menu inverted borderless style={{borderRadius: 0, margin: 0}}>
			<Menu.Item name="home" style={{fontSize: '2em', padding: '.2em', color: 'rgb(217, 128, 48)'}}>
				THR CONSULTING
			</Menu.Item>
			<Menu.Menu position="right">
				<Menu.Item fitted="vertically">
					<Input icon={{name: 'search', circular: true, link: true}} placeholder="Search..." />
				</Menu.Item>
			</Menu.Menu>
			{props.userMenu ? (
				<Popup
					on="click"
					trigger={<Icon name="sidebar" style={{color: 'rgb(217, 128, 48)'}} size="large" circular />}
					content={props.userMenu}
					position="bottom right"
				/>
			) : null}
		</Menu>
	);
}
