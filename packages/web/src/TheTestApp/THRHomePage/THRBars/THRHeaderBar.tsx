import debug from 'debug';
import React from 'react';
import {Grid} from 'semantic-ui-react';
import THRNavBar from './THRNavBar';
import THRMenuBar from './THRMenuBar';

const d = debug('app.web.ThrHomePage.ThrHeaderBar');
interface Props {
	screenSize: string;
}

export default function THRHeaderBar(props: Props) {
	const isMobile = props.screenSize === 'mobile';
	return (
		<Grid
			// stackable
			columns="equal"
			textAlign="center"
			style={{margin: '0px auto', paddingTop: '1vh', background: 'rgba(2, 2, 2, 0.7)'}}
		>
			<Grid.Row>
				<Grid.Column textAlign="center">
					<span style={{color: 'rgb(217, 128, 48)', fontSize: '3em', lineHeight: 1}}>THR CONSULTING</span>
					{/* <span style={{color: 'rgb(189, 197, 73)', fontSize: '3em', lineHeight: 1}}>
					<span style={{color: 'rgb(217, 128, 48)', fontSize: '3em', lineHeight: 1}}>THR CONSULTING</span>
					</span> */}
				</Grid.Column>
			</Grid.Row>
			{isMobile ? <THRMenuBar /> : <THRNavBar />}
		</Grid>
	);
}
