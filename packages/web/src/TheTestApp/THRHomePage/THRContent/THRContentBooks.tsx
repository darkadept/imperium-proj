import debug from 'debug';
import React from 'react';
import {Grid, Button, Divider} from 'semantic-ui-react';

const d = debug('app.web.ThrHomePage.ThrContentBooks');
const GridRowStyles = {
	backgroundColor: 'rgba(1, 1, 1, 0.7)',
	marginTop: '10px',
	marginBottom: '10px',
	maxWidth: '1000px',
};
interface Props {
	screenSize: string;
}

const books = [
	{
		image: {src: 'https://makingyourmilescount.com/wp-content/uploads/2015/05/Super-Bundle-214x300.jpg'},
		description: {
			title: '',
			content: [],
			price: '',
			tax: '',
			shippingFee: '',
			numOfPages: '',
			exclamation: '',
		},
	},
	// {image: {src: }, description: {}},
	// {image: {src: }, description: {}},
	// {image: {src: }, description: {}},
	// {image: {src: }, description: {}},
	// {image: {src: }, description: {}},
];

export default function ThrContentBooks() {
	return (
		<Grid centered columns={2} stackable style={{paddingBottom: '66px'}}>
			<Grid.Row style={GridRowStyles}>
				<Grid.Column width={4} textAlign="center" verticalAlign="middle">
					<img
						alt="super bundle"
						src="https://makingyourmilescount.com/wp-content/uploads/2015/05/Super-Bundle-214x300.jpg"
					/>
				</Grid.Column>
				<Grid.Column width={12} style={{minHeight: '200px', padding: '20px'}} textAlign="center" stretched>
					<p style={{color: 'rgb(217, 128, 48)', fontSize: '3em', marginTop: 10}}>Super Bundle</p>
					<p style={{color: 'rgb(189, 197, 73)', fontSize: '1.5em'}}>Taxes, Taxes, Taxes (156 pages)</p>
					<p style={{color: 'rgb(189, 197, 73)', fontSize: '1.5em'}}>+ Choosing a Trucking Company (259 pages)</p>
					<p style={{color: 'rgb(189, 197, 73)', fontSize: '1.5em'}}>
						+ So You Want to Own a Trucking Company (147 pages)
					</p>
					<p style={{color: 'rgb(217, 128, 48)', fontSize: '1.5em'}}>Cost: $44.50</p>
					<p style={{color: 'rgb(189, 197, 73)', fontSize: '1.5em'}}>Plus Canadian Shipping: $13.50</p>
					<p style={{color: 'rgb(189, 197, 73)', fontSize: '1.5em'}}>Plus GST: $2.90</p>
					<p style={{color: 'rgb(217, 128, 48)', fontSize: '1.5em'}}>Almost $18.00 in savings!</p>
				</Grid.Column>
				<Grid.Column>
					<Button fluid style={{backgroundColor: 'rgb(255, 196, 57)'}}>
						Buy Now
					</Button>
				</Grid.Column>
			</Grid.Row>

			<Grid.Row style={GridRowStyles}>
				<Grid.Column width={4} textAlign="center" verticalAlign="middle">
					<img alt="bundle" src="https://makingyourmilescount.com/wp-content/uploads/2015/05/Bundle-214x300.jpg" />
				</Grid.Column>
				<Grid.Column width={12} style={{minHeight: '200px', padding: '20px'}} textAlign="center" stretched>
					<p style={{color: 'rgb(217, 128, 48)', fontSize: '3em', marginTop: 10}}>Bundle</p>
					<p style={{color: 'rgb(189, 197, 73)', fontSize: '1.5em'}}>Taxes, Taxes, Taxes (156 pages)</p>
					<p style={{color: 'rgb(189, 197, 73)', fontSize: '1.5em'}}>+ Choosing a Trucking Company (259 pages)</p>
					<p style={{color: 'rgb(217, 128, 48)', fontSize: '1.5em'}}>Cost: $32.50</p>
					<p style={{color: 'rgb(189, 197, 73)', fontSize: '1.5em'}}>Plus Canadian Shipping: $12.50</p>
					<p style={{color: 'rgb(189, 197, 73)', fontSize: '1.5em'}}>Plus GST: $2.25</p>
					<p style={{color: 'rgb(217, 128, 48)', fontSize: '1.5em'}}>Bundle & Save Over $14.00!</p>
				</Grid.Column>
				<Grid.Column>
					<Button fluid style={{backgroundColor: 'rgb(255, 196, 57)'}}>
						Buy Now
					</Button>
				</Grid.Column>
			</Grid.Row>

			<Grid.Row style={GridRowStyles}>
				<Grid.Column width={4} textAlign="center" verticalAlign="middle">
					<img
						alt="choosing a trucking company"
						src="https://makingyourmilescount.com/wp-content/uploads/2015/05/CHOOSING-A-TRUCKING-COMPANY-Low-Resolution-Copy-214x300.jpg"
					/>
				</Grid.Column>
				<Grid.Column width={12} style={{minHeight: '200px', padding: '20px'}} textAlign="center" stretched>
					<p style={{color: 'rgb(217, 128, 48)', fontSize: '3em', marginTop: 10}}>Choosing a Trucking Company</p>
					<p style={{color: 'rgb(189, 197, 73)', fontSize: '1.5em'}}>By Robert Scheper</p>
					<p style={{color: 'rgb(217, 128, 48)', fontSize: '1.5em'}}>Cost: $19.99</p>
					<p style={{color: 'rgb(189, 197, 73)', fontSize: '1.5em'}}>Plus Canadian shipping: $12.50</p>
					<p style={{color: 'rgb(189, 197, 73)', fontSize: '1.5em'}}>Plus GST: $1.62</p>
					<p style={{color: 'rgb(189, 197, 73)', fontSize: '1.5em'}}>Pages: 259</p>
					<p style={{color: 'rgb(189, 197, 73)', fontSize: '1.5em'}}>Published: 2015</p>
				</Grid.Column>
				<Grid.Column>
					<Button fluid style={{backgroundColor: 'rgb(255, 196, 57)'}}>
						Buy Now
					</Button>
				</Grid.Column>
			</Grid.Row>

			<Grid.Row style={GridRowStyles}>
				<Grid.Column width={4} textAlign="center" verticalAlign="middle">
					<img
						alt="Taxes, Taxes, Taxes"
						src="https://makingyourmilescount.com/wp-content/uploads/2015/05/TAXES-TAXES-TAXES-Low-Resolution-Copy-214x300.jpg"
					/>
				</Grid.Column>
				<Grid.Column width={12} style={{minHeight: '200px', padding: '20px'}} textAlign="center" stretched>
					<p style={{color: 'rgb(217, 128, 48)', fontSize: '3em', marginTop: 10}}>Taxes, Taxes, Taxes</p>
					<p style={{color: 'rgb(189, 197, 73)', fontSize: '1.5em'}}>By Robert Scheper</p>
					<p style={{color: 'rgb(217, 128, 48)', fontSize: '1.5em'}}>Cost: $25.95</p>
					<p style={{color: 'rgb(189, 197, 73)', fontSize: '1.5em'}}>Free Canadian shipping is included!</p>
					<p style={{color: 'rgb(189, 197, 73)', fontSize: '1.5em'}}>Plus GST: $1.30</p>
					<p style={{color: 'rgb(189, 197, 73)', fontSize: '1.5em'}}>Pages: 156</p>
					<p style={{color: 'rgb(189, 197, 73)', fontSize: '1.5em'}}>Published: 2007</p>
				</Grid.Column>
				<Grid.Column>
					<Button fluid style={{backgroundColor: 'rgb(255, 196, 57)'}}>
						Buy Now
					</Button>
				</Grid.Column>
			</Grid.Row>

			<Grid.Row style={GridRowStyles}>
				<Grid.Column width={4} textAlign="center" verticalAlign="middle">
					<img
						alt="So You Want to Own a Trucking Company?"
						src="https://makingyourmilescount.com/wp-content/uploads/2015/05/So-you-want-to-own-a-trucking-company-1-193x300.jpg"
					/>
				</Grid.Column>
				<Grid.Column width={12} style={{minHeight: '200px', padding: '20px'}} textAlign="center" stretched>
					<p style={{color: 'rgb(217, 128, 48)', fontSize: '3em', marginTop: 10}}>
						So You Want to Own a Trucking Company?
					</p>
					<p style={{color: 'rgb(189, 197, 73)', fontSize: '1.5em'}}>By Bill Cameron</p>
					<p style={{color: 'rgb(217, 128, 48)', fontSize: '1.5em'}}>Cost: $12.95</p>
					<p style={{color: 'rgb(189, 197, 73)', fontSize: '1.5em'}}>Plus Canadian Shipping: $3.50</p>
					<p style={{color: 'rgb(189, 197, 73)', fontSize: '1.5em'}}>Plus GST: $0.82</p>
					<p style={{color: 'rgb(189, 197, 73)', fontSize: '1.5em'}}>Pages: 147</p>
					<p style={{color: 'rgb(189, 197, 73)', fontSize: '1.5em'}}>Published: 2017</p>
				</Grid.Column>
				<Grid.Column>
					<Button fluid style={{backgroundColor: 'rgb(255, 196, 57)'}}>
						Buy Now
					</Button>
				</Grid.Column>
			</Grid.Row>

			<Grid.Row style={GridRowStyles}>
				<Grid.Column width={12} style={{minHeight: '100px', color: 'white'}} textAlign="center" stretched>
					Shipping and handling costs are for Canadian customers only. For USA customers Purolator Courier charges must
					be requested separately. If you are purchasing multiple books in quantities greater than 10, contact our
					office directly for discounts.
				</Grid.Column>
			</Grid.Row>
		</Grid>
	);
}
