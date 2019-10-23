import debug from 'debug';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Grid} from 'semantic-ui-react';
import React, {useEffect, useState} from 'react';

const d = debug('app.web.ThrHomePage.ThrContentArticles');
const GridRowStyles = {
	backgroundColor: 'rgba(1, 1, 1, 0.7)',
	marginTop: '10px',
	marginBottom: '10px',
	maxWidth: '1000px',
};

export default function ThrContentArticles() {
	const [articles, setArticles] = useState();

	useEffect(() => {
		axios.get('https://makingyourmilescount.com/wp-json/wp/v2/pages/22').then(stuff => setArticles(stuff.data));
	}, []);

	// 8 = home
	// 10 = contact
	// 14 = research
	// 16 = services
	// 22 = articles
	// 828
	// 653
	// 651
	// 583
	// 572
	// 448
	// 414
	// 291
	// 267
	// 266

	function createMarkup(html) {
		return {__html: html};
	}

	d(articles);

	return (
		<Grid centered columns={2} stackable style={{paddingBottom: '66px'}}>
			{articles &&
				[articles].map(post => (
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
		</Grid>
	);
}
