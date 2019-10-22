import debug from 'debug';
import React, {useState} from 'react';
import {Grid, Menu, Icon, Button} from 'semantic-ui-react';

export default function MenuBar() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<Grid.Column>
			<Menu fixed="bottom" vertical fluid style={{minHeight: 'inherit'}}>
				{menuOpen ? (
					<>
						<Menu.Item as="a" name="home" href="/homePage">
							<Icon name="home" />
							Home
						</Menu.Item>

						<Menu.Item
							name="books"
							// onClick={}
						>
							<Icon name="book" />
							Books
						</Menu.Item>

						<Menu.Item
							name="articles"
							// onClick={}
						>
							<Icon name="file alternate outline" />
							Articles
						</Menu.Item>

						<Menu.Item
							name="research"
							// onClick={}
						>
							<Icon name="edit outline" />
							Research
						</Menu.Item>

						<Menu.Item
							name="services"
							// onClick={}
						>
							<Icon name="info circle" />
							Services
						</Menu.Item>

						<Menu.Item
							name="podcast"
							// onClick={}
						>
							<Icon name="podcast" />
							Free Podcasts
						</Menu.Item>

						<Menu.Item
							name="events"
							// onClick={}
						>
							<Icon name="calendar alternate outline" />
							Events
						</Menu.Item>

						<Menu.Item
							name="contact"
							// onClick={}
						>
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
