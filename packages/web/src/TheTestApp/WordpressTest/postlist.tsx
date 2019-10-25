import debug from 'debug';
import axios from 'axios';
import {Link} from 'react-router-dom';
import React, {Component} from 'react';

const d = debug('app.TheTestApp.WebpackTest.postlist');

class PostList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: [],
		};
	}

	componentDidMount() {
		axios.get('https://makingyourmilescount.com/wp-json/wp/v2/pages/18').then(posts => {
			this.setState({
				posts: posts.data,
			});
		});
	}

	createMarkup(html) {
		return {__html: html};
	}

	render() {
		d(this.state.posts);
		return (
			<div>
				{this.state.posts.map(post => (
					<Link to={`/${post.slug}`} key={post.id}>
						<div className="card" key={post.id}>
							<div className="card-content">
								<h3>{post.title.rendered}</h3>
								<div dangerouslySetInnerHTML={this.createMarkup(post.excerpt.rendered)} />
							</div>
						</div>
					</Link>
				))}
			</div>
		);
	}
}

export default PostList;
