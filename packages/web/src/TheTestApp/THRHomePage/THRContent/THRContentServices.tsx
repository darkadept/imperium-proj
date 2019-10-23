import debug from 'debug';
import React from 'react';
import {Grid, List} from 'semantic-ui-react';

const d = debug('app.web.ThrHomePage.ThrContentServices');
const GridRowStyles = {
	backgroundColor: 'rgba(1, 1, 1, 0.7)',
	margin: '10px',
	maxWidth: '1000px',
};

export default function ThrContentServices() {
	return (
		<Grid centered columns="equal" stackable style={{paddingBottom: '66px'}}>
			<Grid.Row style={GridRowStyles} stretched>
				<Grid.Column style={{minHeight: '200px'}} width={11}>
					<p style={{color: 'rgb(217, 128, 48)', fontSize: '2em', marginTop: 10}}>THR Consulting Group Ltd.</p>
					<div style={{color: 'rgb(189, 197, 73)', fontSize: '1.5em', fontFamily: 'verdana'}}>
						<p>Sells, distributes and promotes the books</p>
						<List bulleted>
							<List.Item>Making Your Miles Count: Taxes, Taxes, Taxes</List.Item>
							<List.Item>Making Your Miles Count: Choosing a Trucking Company</List.Item>
						</List>
						<p>Truckers Seminars</p>
					</div>
				</Grid.Column>
				<Grid.Column textAlign="center" verticalAlign="middle">
					<img
						style={{width: '100%', height: 'auto'}}
						alt="after tax meal calculations chart"
						src="https://makingyourmilescount.com/wp-content/uploads/2015/05/Truck.jpg"
					/>
				</Grid.Column>
			</Grid.Row>

			<Grid.Row style={GridRowStyles} stretched>
				<Grid.Column style={{minHeight: '200px'}} width={16}>
					<p style={{color: 'rgb(217, 128, 48)', fontSize: '2em', marginTop: 10}}>THR Management Systems Inc.</p>
					<div style={{color: 'rgb(189, 197, 73)', fontSize: '1.5em', fontFamily: 'verdana'}}>
						<p>Provides the following services:</p>
						<List bulleted>
							<List.Item>Full service accounting: (monthly GST, source deductions etc.)</List.Item>
							<List.Item>Truckers only income tax preparation: (personal T1 and corporate T2)</List.Item>
							<List.Item>Truckers comprehensive tax planning</List.Item>
							<List.Item>Government communication and audit assistance</List.Item>
							<List.Item>Trucking company contract consulting and mediation</List.Item>
							<List.Item>Comprehensive administrative consulting to lease/owner operators</List.Item>
						</List>
					</div>
				</Grid.Column>
			</Grid.Row>
		</Grid>
	);
}
