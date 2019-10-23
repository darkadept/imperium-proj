import debug from 'debug';
import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {Grid, Menu, Icon, Button} from 'semantic-ui-react';

export default function MenuBar() {
	const [menuOpen, setMenuOpen] = useState(false);
	const history = useHistory();

	function handelClick(path) {
		setMenuOpen(false);
		history.push(path);
	}

	return (
		<Grid.Column>
			<Menu fixed="bottom" vertical fluid style={{minHeight: 'inherit'}}>
				{menuOpen ? (
					<>
						<Menu.Item as="a" name="home" onClick={() => handelClick('/thr')}>
							<Icon name="home" />
							Home
						</Menu.Item>

						<Menu.Item name="books" onClick={() => handelClick('/thr/books')}>
							<Icon name="book" />
							Books
						</Menu.Item>

						<Menu.Item name="articles" onClick={() => handelClick('/thr/articles')}>
							<Icon name="file alternate outline" />
							Articles
						</Menu.Item>

						<Menu.Item name="research" onClick={() => handelClick('/thr/research')}>
							<Icon name="edit outline" />
							Research
						</Menu.Item>

						<Menu.Item name="services" onClick={() => handelClick('/thr/services')}>
							<Icon name="info circle" />
							Services
						</Menu.Item>

						<Menu.Item name="podcast" onClick={() => handelClick('/thr/podcasts')}>
							<Icon name="podcast" />
							Free Podcasts
						</Menu.Item>

						<Menu.Item name="events" onClick={() => handelClick('/thr/events')}>
							<Icon name="calendar alternate outline" />
							Events
						</Menu.Item>

						<Menu.Item name="contact" onClick={() => handelClick('/thr/contact')}>
							<Icon name="phone" />
							Contact
						</Menu.Item>

						<Menu.Item name="clientLogin" href="https://eds.mymc.app">
							<Icon name="user outline" />
							Client Login
						</Menu.Item>
					</>
				) : null}

				<Button color="grey" fluid onClick={() => setMenuOpen(!menuOpen)}>
					<Icon name={menuOpen ? 'arrow down' : 'bars'} />
					Menu
				</Button>
			</Menu>
		</Grid.Column>
	);
}
