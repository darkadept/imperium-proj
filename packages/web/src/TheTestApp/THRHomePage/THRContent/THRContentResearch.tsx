import debug from 'debug';
import React from 'react';
import {Grid} from 'semantic-ui-react';

const d = debug('app.web.ThrHomePage.ThrContentResearch');
const GridRowStyles = {
	backgroundColor: 'rgba(1, 1, 1, 0.7)',
	margin: '10px',
	maxWidth: '1000px',
};

export default function ThrContentResearch() {
	return (
		<Grid centered columns="equal" stackable style={{paddingBottom: '66px'}}>
			<Grid.Row style={GridRowStyles} stretched>
				<Grid.Column style={{minHeight: '200px'}} width={16}>
					<p style={{color: 'rgb(217, 128, 48)', fontSize: '2em', marginTop: 10}}>After Tax Meal Calculations</p>
					<p style={{color: 'rgb(189, 197, 73)', fontSize: '1.5em', fontFamily: 'verdana'}}>
						This 23 year chart is an after tax comparison of the two systems discussed in the book “Making Your Miles
						Count: Taxes, Taxes, Taxes”. The difference consistently becomes larger year over year because non-taxable
						benefits increase twice per year at a rate usually greater than inflation. The TL2 simplified method
						increases only randomly, for example: 2003 ($33.00 to $45.00), 2006 ($45.00 to $51.00), 2007 (start of the
						increase from 50%-80% deductible).
					</p>
				</Grid.Column>
				<Grid.Column textAlign="center" verticalAlign="middle">
					<img
						style={{width: '100%', height: 'auto'}}
						alt="after tax meal calculations chart"
						src="https://makingyourmilescount.com/wp-content/uploads/2015/05/After-Tax-Meal-Calculations.png"
					/>
				</Grid.Column>
			</Grid.Row>
		</Grid>
	);
}
