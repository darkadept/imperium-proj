import debug from 'debug';
import React from 'react';
import {useHistory} from 'react-router-dom';
import {Grid, Icon} from 'semantic-ui-react';

const d = debug('app.web.ThrHomePage.ThrNavBar');
const linkStyle = {cursor: 'pointer', color: 'white'};

export default function THRNavBar() {
	const history = useHistory();
	return (
		<Grid.Row className="mr-auto" textAlign="center">
			<Grid.Column onClick={() => history.push('/thr')} style={linkStyle}>
				<Icon name="home" />
				Home
			</Grid.Column>
			<Grid.Column onClick={() => history.push('/thr/books')} style={linkStyle}>
				<Icon name="book" />
				Books
			</Grid.Column>
			<Grid.Column onClick={() => history.push('/thr/articles')} style={linkStyle}>
				<Icon name="file alternate outline" />
				Articles
			</Grid.Column>
			<Grid.Column onClick={() => history.push('/thr/research')} style={linkStyle}>
				<Icon name="edit outline" />
				Research
			</Grid.Column>
			<Grid.Column onClick={() => history.push('/thr/services')} style={linkStyle}>
				<Icon name="info circle" />
				Services
			</Grid.Column>
			<Grid.Column onClick={() => history.push('/thr/podcasts')} style={linkStyle}>
				<Icon name="podcast" />
				Free Podcasts
			</Grid.Column>
			<Grid.Column onClick={() => history.push('/thr/events')} style={linkStyle}>
				<Icon name="calendar alternate outline" />
				Events
			</Grid.Column>
			<Grid.Column onClick={() => history.push('/thr/contact')} style={linkStyle}>
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
