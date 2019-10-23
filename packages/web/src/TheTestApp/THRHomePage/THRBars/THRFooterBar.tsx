import debug from 'debug';
import React from 'react';
import {useHistory} from 'react-router-dom';
import {List, Grid, Icon} from 'semantic-ui-react';
// import {Map, GoogleApiWrapper, Marker} from 'google-maps-react';

const d = debug('app.web.ThrHomePage.ThrFooterBar');

interface Props {
	// google: {maps: any};
	// loaded: boolean;
	screenSize: string;
}

export default function THRFooterBar(props: Props) {
	const history = useHistory();
	const paddingBottom = props.screenSize === 'mobile' ? {paddingBottom: '30px'} : {};
	return (
		<Grid
			stackable
			columns="equal"
			style={{
				margin: 0,
				background: 'rgba(2, 2, 2, 0.8)',
				...paddingBottom,
			}}
		>
			<Grid.Row>
				<Grid.Column>
					<List size="large" relaxed inverted>
						<List.Item>
							<h1 style={{color: 'white'}}>How to contact us:</h1>
						</List.Item>
						<List.Item>
							<List.Content>
								<List.Header>HOURS OF OPERATION</List.Header>
								<List.Description>Mon-Fri, 8:30am-5:00pm, CST</List.Description>
							</List.Content>
						</List.Item>
						<List.Item>
							<List.Content>
								<List.Header>WRITE</List.Header>
								<List.Description>101 Acres Drive</List.Description>
								<List.Description>Steinbach, Manitoba, Canada</List.Description>
								<List.Description>R5G 1N7</List.Description>
							</List.Content>
						</List.Item>
						<List.Item>
							<List.Content>
								<List.Header>CALL</List.Header>
								<List.Description>Phone: 204-326-5782</List.Description>
								<List.Description>Toll Free: 877-987-9787</List.Description>
								<List.Description>Fax: 855-680-3816</List.Description>
							</List.Content>
						</List.Item>
						<List.Item>
							<List.Content>
								<List.Header>EMAIL</List.Header>
								<List.Description as="a" onClick={() => history.push('/thr/contact')}>
									Steinbach
								</List.Description>
								<List.Description as="a">Winkler</List.Description>
								<List.Description as="a">Winnipeg</List.Description>
								<List.Description as="a">Mississauga</List.Description>
							</List.Content>
						</List.Item>
					</List>
				</Grid.Column>
				<Grid.Column style={{minHeight: '300px'}}>
					{/* <Map
						google={props.google}
						zoom={13}
						style={{color: 'white', width: '90%', height: '100%', border: '1px solid white'}}
						initialCenter={{lat: 49.54, lng: -96.7}}
					>
						<Marker position={{lat: 49.5393207, lng: -96.6999}} />
					</Map> */}
				</Grid.Column>
			</Grid.Row>

			<Grid.Row>
				<Grid.Column verticalAlign="middle" textAlign="center">
					<span style={{fontSize: '1em', color: 'white'}}>Making Your Miles Count © 2019. All Rights Reserved.</span>
					<a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/makeyourmilescount">
						<Icon inverted name="facebook" size="big" style={{float: 'right', cursor: 'pointer'}} />
					</a>
				</Grid.Column>
			</Grid.Row>
		</Grid>
	);
}

// export default GoogleApiWrapper({
// 	apiKey: process.env.APIKEY,
// })(props => THRFooterBar(props));
