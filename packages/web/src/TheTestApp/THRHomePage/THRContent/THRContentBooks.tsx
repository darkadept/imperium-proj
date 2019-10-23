import debug from 'debug';
import axios from 'axios';
import get from 'lodash/get';
import {Link} from 'react-router-dom';
import {Grid, Button} from 'semantic-ui-react';
import React, {useEffect, useState} from 'react';

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
interface Books {
	image: string;
	description: {
		title: string;
		content?: string[];
		price?: string;
		tax?: string;
		shippingFee?: string;
		exclamation?: string;
	};
}

// const testBooks: Books[] = [
// 	{
// 		image: 'https://makingyourmilescount.com/wp-content/uploads/2015/05/Super-Bundle-214x300.jpg',
// 		description: {
// 			title: 'Super Bundle',
// 			content: [
// 				'Taxes, Taxes, Taxes (156 pages)',
// 				'+ Choosing a Trucking Company (259 pages)',
// 				'+ So You Want to Own a Trucking Company (147 pages)',
// 			],
// 			price: 'Cost: $44.50',
// 			shippingFee: 'Plus Canadian Shipping: $13.50',
// 			tax: 'Plus GST: $2.90',
// 			exclamation: 'Almost $18.00 in savings!',
// 		},
// 	},
// 	{
// 		image: 'https://makingyourmilescount.com/wp-content/uploads/2015/05/Bundle-214x300.jpg',
// 		description: {
// 			title: 'Bundle',
// 			content: ['Taxes, Taxes, Taxes (156 pages)', '+ Choosing a Trucking Company (259 pages)'],
// 			price: 'Cost: $32.50',
// 			shippingFee: 'Plus Canadian Shipping: $12.50',
// 			tax: 'Plus GST: $2.25',
// 			exclamation: 'Bundle & Save Over $14.00!',
// 		},
// 	},
// 	{
// 		image:
// 			'https://makingyourmilescount.com/wp-content/uploads/2015/05/CHOOSING-A-TRUCKING-COMPANY-Low-Resolution-Copy-214x300.jpg',
// 		description: {
// 			title: 'Choosing a Trucking Company',
// 			content: ['By Robert Scheper', 'Published: 2015', 'Pages: 259'],
// 			price: 'Cost: $19.99',
// 			shippingFee: 'Plus Canadian Shipping: $12.50',
// 			tax: 'Plus GST: $1.62',
// 		},
// 	},
// 	{
// 		image:
// 			'https://makingyourmilescount.com/wp-content/uploads/2015/05/TAXES-TAXES-TAXES-Low-Resolution-Copy-214x300.jpg',
// 		description: {
// 			title: 'Taxes, Taxes, Taxes',
// 			content: ['By Robert Scheper', 'Published: 2007', 'Pages: 156'],
// 			price: 'Cost: $25.95',
// 			shippingFee: 'Free Canadian shipping is included!',
// 			tax: 'Plus GST: $1.30',
// 		},
// 	},
// 	{
// 		image:
// 			'https://makingyourmilescount.com/wp-content/uploads/2015/05/So-you-want-to-own-a-trucking-company-1-193x300.jpg',
// 		description: {
// 			title: 'So You Want to Own a Trucking Company?',
// 			content: ['By Bill Cameron', 'Published: 2017', 'Pages: 147'],
// 			price: 'Cost: $12.95',
// 			shippingFee: 'Plus Canadian Shipping: $3.50',
// 			tax: 'Plus GST: $0.82',
// 		},
// 	},
// ];

export default function ThrContentBooks() {
	const [books, setBooks] = useState();

	useEffect(() => {
		axios.get('https://makingyourmilescount.com/wp-json/wp/v2/pages/18').then(stuff => setBooks(stuff.data));
	}, []);

	function createMarkup(html) {
		return {__html: html};
	}

	return (
		<Grid centered columns={2} stackable style={{paddingBottom: '66px'}}>
			{books &&
				[books].map(post => (
					<Grid.Row style={GridRowStyles} key={post.id}>
						<Link to={`/${post.slug}`} key={post.id}>
							<div className="card" key={post.id}>
								<div className="card-content">
									<h3>{post.title.rendered}</h3>
									<div dangerouslySetInnerHTML={createMarkup(post.content.rendered)} />
								</div>
							</div>
						</Link>
					</Grid.Row>
				))}

			{/* {testBooks.map(book => {
				return (
					<Grid.Row style={GridRowStyles} key={book.description.title}>
						<Grid.Column width={4} textAlign="center" verticalAlign="middle">
							<img alt={book.description.title} src={book.image} />
						</Grid.Column>
						<Grid.Column width={12} style={{minHeight: '200px', padding: '20px'}} textAlign="center" stretched>
							<p style={{color: 'rgb(217, 128, 48)', fontSize: '3em', marginTop: 10}}>{book.description.title}</p>
							{get(book, 'description.content', []).map(c => (
								<p key={c} style={{color: 'rgb(189, 197, 73)', fontSize: '1.5em'}}>
									{c}
								</p>
							))}
							<p style={{color: 'rgb(217, 128, 48)', fontSize: '1.5em'}}>{book.description.price}</p>
							<p style={{color: 'rgb(189, 197, 73)', fontSize: '1.5em'}}>{book.description.shippingFee}</p>
							<p style={{color: 'rgb(189, 197, 73)', fontSize: '1.5em'}}>{book.description.tax}</p>
							<p style={{color: 'rgb(217, 128, 48)', fontSize: '1.5em'}}>{book.description.exclamation}</p>
						</Grid.Column>
						<Grid.Column>
							<Button fluid style={{backgroundColor: 'rgb(255, 196, 57)'}}>
								Buy Now
							</Button>
						</Grid.Column>
					</Grid.Row>
				);
			})}

			<Grid.Row style={GridRowStyles}>
				<Grid.Column width={12} style={{minHeight: '100px', color: 'white'}} textAlign="center" stretched>
					Shipping and handling costs are for Canadian customers only. For USA customers Purolator Courier charges must
					be requested separately. If you are purchasing multiple books in quantities greater than 10, contact our
					office directly for discounts.
				</Grid.Column>
			</Grid.Row> */}
		</Grid>
	);
}
