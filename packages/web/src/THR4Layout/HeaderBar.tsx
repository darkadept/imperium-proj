import debug from 'debug';
import React from 'react';
import {Menu, Input} from 'semantic-ui-react';

const d = debug('app.THR4Layout.HeaderBar');

export default function HeaderBar() {
	// return (
	// 	<Grid columns="equal">
	// 		<Grid.Row color="black" verticalAlign="middle">
	// 			<Grid.Column>
	// 				<Header>Logout</Header>
	// 			</Grid.Column>
	// 			<Grid.Column textAlign="center" style={{color: 'rgb(217, 128, 48)'}}>
	// 				<Header>THR CONSULTING</Header>
	// 			</Grid.Column>
	// 			<Grid.Column textAlign="right">
	// 				<Input icon="search" placeholder="Search..." size="small" />
	// 			</Grid.Column>
	// 		</Grid.Row>
	// 	</Grid>
	// );

	return (
		<Menu inverted borderless style={{borderRadius: 0, margin: 0}}>
			<Menu.Item name="home" style={{fontSize: '2em', padding: '.2em', color: 'rgb(217, 128, 48)'}}>
				THR CONSULTING
			</Menu.Item>
			<Menu.Menu position="right">
				<Menu.Item fitted="vertically">
					<Input icon="search" placeholder="Search..." size="small" />
				</Menu.Item>
				<Menu.Item name="logout" onClick={() => {}}>
					Logout
				</Menu.Item>
			</Menu.Menu>
		</Menu>
	);
}
