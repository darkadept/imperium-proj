import debug from 'debug';
import React from 'react';
import {Grid} from 'semantic-ui-react';

const d = debug('app.web.ThrHomePage.ThrContentContact');
const GridRowStyles = {
	backgroundColor: 'rgba(1, 1, 1, 0.7)',
	marginTop: '10px',
	marginBottom: '10px',
	maxWidth: '1000px',
};
interface Props {
	screenSize: string;
}

export default function ThrContentContact(props: Props) {
	const {screenSize} = props;

	return (
		<Grid centered columns="equal" stackable style={{paddingBottom: '66px'}}>
			<Grid.Row style={GridRowStyles} stretched>
				{screenSize === 'mobile' ? null : (
					<Grid.Column textAlign="center" verticalAlign="middle">
						<img
							onClick={() => d('go to Location...')}
							style={{width: '100%', height: 'auto', cursor: 'pointer'}}
							alt="steinbach"
							src="https://makingyourmilescount.com/wp-content/uploads/2015/05/Steinbach-Office-Updated.jpg"
						/>
					</Grid.Column>
				)}
				<Grid.Column style={{minHeight: '200px'}} textAlign="center">
					<span style={{color: 'rgb(217, 128, 48)', fontSize: '3em', marginTop: 10}}>Steinbach, MB</span>
					<span style={{color: 'rgb(189, 197, 73)', fontSize: '1.5em'}}>101 Acres Drive</span>
					<span style={{color: 'rgb(189, 197, 73)', fontSize: '1.5em'}}>Steinbach, Manitoba, R5G 1N7</span>
					<span style={{color: 'rgb(189, 197, 73)', fontSize: '1.5em'}}>Fax: 855-680-3816</span>
					<span style={{color: 'rgb(189, 197, 73)', fontSize: '1.5em'}}>Phone: 204-326-5782</span>
				</Grid.Column>
			</Grid.Row>

			<Grid.Row style={GridRowStyles} stretched>
				{screenSize === 'mobile' ? null : (
					<Grid.Column textAlign="center" verticalAlign="middle">
						<img
							onClick={() => d('go to Location...')}
							style={{width: '100%', height: 'auto', cursor: 'pointer'}}
							alt="mississauga"
							src="https://makingyourmilescount.com/wp-content/uploads/2017/01/Tor-H-IMG_1198-two-1024x576.jpg"
						/>
					</Grid.Column>
				)}
				<Grid.Column style={{minHeight: '200px'}} textAlign="center">
					<span style={{color: 'rgb(217, 128, 48)', fontSize: '3em', marginTop: 10}}>Mississauga, ON</span>
					<span style={{color: 'rgb(189, 197, 73)', fontSize: '1.5em'}}>1553 Shawson Drive Room 203</span>
					<span style={{color: 'rgb(189, 197, 73)', fontSize: '1.5em'}}>Mississauga, Ontario, L4W 1T7</span>
					<span style={{color: 'rgb(189, 197, 73)', fontSize: '1.5em'}}>Fax: 289-800-1184</span>
					<span style={{color: 'rgb(189, 197, 73)', fontSize: '1.5em'}}>Phone: 289-804-1767</span>
				</Grid.Column>
			</Grid.Row>

			<Grid.Row style={GridRowStyles} stretched>
				{screenSize === 'mobile' ? null : (
					<Grid.Column textAlign="center" verticalAlign="middle">
						<img
							onClick={() => d('go to Location...')}
							style={{width: '100%', height: 'auto', cursor: 'pointer'}}
							alt="winkler"
							src="https://makingyourmilescount.com/wp-content/uploads/2015/05/43242-1024x768.jpg"
						/>
					</Grid.Column>
				)}
				<Grid.Column style={{minHeight: '200px'}} textAlign="center">
					<span style={{color: 'rgb(217, 128, 48)', fontSize: '3em', marginTop: 10}}>Winkler, MB</span>
					<span style={{color: 'rgb(189, 197, 73)', fontSize: '1.5em'}}>685 Cargill Road</span>
					<span style={{color: 'rgb(189, 197, 73)', fontSize: '1.5em'}}>Winkler, Manitoba, R6W 0K4</span>
					<span style={{color: 'rgb(189, 197, 73)', fontSize: '1.5em'}}>Fax: 855-680-3821</span>
					<span style={{color: 'rgb(189, 197, 73)', fontSize: '1.5em'}}>Phone: 204-331-7070</span>
				</Grid.Column>
			</Grid.Row>

			<Grid.Row style={GridRowStyles} stretched>
				{screenSize === 'mobile' ? null : (
					<Grid.Column textAlign="center" verticalAlign="middle">
						<img
							onClick={() => d('go to Location...')}
							style={{width: '100%', height: 'auto', cursor: 'pointer'}}
							alt="winnipeg"
							src="https://makingyourmilescount.com/wp-content/uploads/2015/05/Winnipeg-Office-Resized-1024x576.jpg"
						/>
					</Grid.Column>
				)}
				<Grid.Column style={{minHeight: '200px'}} textAlign="center">
					<span style={{color: 'rgb(217, 128, 48)', fontSize: '3em', marginTop: 10}}>Winnipeg, MB</span>
					<span style={{color: 'rgb(189, 197, 73)', fontSize: '1.5em'}}>2535 Inkster Boulevard</span>
					<span style={{color: 'rgb(189, 197, 73)', fontSize: '1.5em'}}>Winnipeg, Manitoba, R2R 1V4</span>
					<span style={{color: 'rgb(189, 197, 73)', fontSize: '1.5em'}}>Fax: 204-633-9669</span>
					<span style={{color: 'rgb(189, 197, 73)', fontSize: '1.5em'}}>Phone: 204-272-9605</span>
				</Grid.Column>
			</Grid.Row>
		</Grid>
	);
}
