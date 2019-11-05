import debug from 'debug';
import {Segment} from 'semantic-ui-react';
import React, {useState, createContext} from 'react';
import UserMenu from './UserMenu';
// @ts-ignore
import styles from './styles.css';

const d = debug('app.THR4Layout.THR4Layout');

interface Props {
	route: {
		sidebar: React.ElementType;
		statusbar: React.ElementType;
		content: React.ElementType;
		menu: React.ElementType;
		footer: React.ElementType;
	};
}

interface MenuState {
	currentUser?: {profile: {firstName: string; lastName: string; id: string}};
	showStatusBar: boolean;
	activeItem: string;
}
// @ts-ignore
export const MenuContext = createContext<[MenuState, () => {}]>([{}, () => {}]);

export default function THR4Layout(props: Props) {
	const [menuState, setMenuState] = useState({
		showStatusBar: true,
	});

	const menu = props.route.menu ? (
		<props.route.menu {...props} userMenu={<UserMenu MenuContext={MenuContext} />} />
	) : null;

	const statusbar = props.route.statusbar ? <props.route.statusbar {...props} /> : null;

	const sidebar = props.route.sidebar ? (
		<div className={styles.menu}>
			<props.route.sidebar {...props} />
		</div>
	) : null;

	const content = props.route.content ? <props.route.content {...props} /> : null;

	const footer = props.route.footer ? <props.route.footer {...props} /> : null;

	return (
		<div className={styles.parent}>
			<MenuContext.Provider value={[menuState, setMenuState]}>
				<div className={styles.header}>
					{menu}
					{menuState.showStatusBar && statusbar}
				</div>
				<Segment attached className={styles.wrapper}>
					{sidebar}
					<div className={styles.content}>{content}</div>
				</Segment>
				{footer}
			</MenuContext.Provider>
		</div>
	);
}
