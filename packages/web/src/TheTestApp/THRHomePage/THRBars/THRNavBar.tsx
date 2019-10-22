import debug from 'debug';
import React from 'react';
import {Grid, Icon} from 'semantic-ui-react';

const d = debug('app.web.ThrHomePage.ThrNavBar');
const linkStyle = {cursor: 'pointer', color: 'white'};

export default function THRNavBar() {
	return (
		<Grid.Row className="mr-auto" textAlign="center">
			<Grid.Column href="/homePage" style={linkStyle}>
				<Icon name="home" />
				Home
			</Grid.Column>
			<Grid.Column href="/homePage/books" style={linkStyle}>
				<Icon name="book" />
				Books
			</Grid.Column>
			<Grid.Column href="" style={linkStyle}>
				<Icon name="file alternate outline" />
				Articles
			</Grid.Column>
			<Grid.Column href="" style={linkStyle}>
				<Icon name="edit outline" />
				Research
			</Grid.Column>
			<Grid.Column href="" style={linkStyle}>
				<Icon name="info circle" />
				Services
			</Grid.Column>
			<Grid.Column href="" style={linkStyle}>
				<Icon name="podcast" />
				Free Podcasts
			</Grid.Column>
			<Grid.Column href="" style={linkStyle}>
				<Icon name="calendar alternate outline" />
				Events
			</Grid.Column>
			<Grid.Column href="" style={linkStyle}>
				<Icon name="phone" />
				Contact
			</Grid.Column>
			<Grid.Column href="https://eds.mymc.app" style={linkStyle}>
				<Icon name="user outline" />
				Client Login
			</Grid.Column>
		</Grid.Row>
	);
}
