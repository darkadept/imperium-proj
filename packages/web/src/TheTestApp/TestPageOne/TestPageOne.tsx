import React from 'react';
import debug from 'debug';
import {Grid} from 'semantic-ui-react';

const d = debug('app.web.src.TheTestApp.TestPageOne');

export default function TestPageOne(props) {
	d(props);
	return (
		<Grid columns="equal">
			<Grid.Row>
				<Grid.Column>
					asdf
				</Grid.Column>
				<Grid.Column>
					sda
				</Grid.Column>
			</Grid.Row>
			<Grid.Row>
				<Grid.Column>
					asdf
				</Grid.Column>
			</Grid.Row>
		</Grid>
	);
	// return (
	// 	<Row>
	// 		<Col span={12}>
	// 			<div>Hello Test Page One</div>
	// 		</Col>
	// 		<Col span={12}>asdf</Col>
	// 	</Row>
	// );
}
