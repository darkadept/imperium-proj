import debug from 'debug';
import {Grid} from 'semantic-ui-react';
import {useParams} from 'react-router-dom';
import React, {CSSProperties, useLayoutEffect, useState, useEffect} from 'react';
import THRHeaderBar from './THRBars/THRHeaderBar';
import THRFooterBar from './THRBars/THRFooterBar';
import THRContentHome from './THRContent/THRContentHome';
import THRContentBooks from './THRContent/THRContentBooks';
import THRContentContact from './THRContent/THRContentContact';
import THRContentResearch from './THRContent/THRContentResearch';
import THRContentServices from './THRContent/THRContentServices';
import ThrContentArticles from './THRContent/THRContentArticles';
import ThrContentEvents from './THRContent/THRContentEvents';

const d = debug('app.web.ThrHomePage.THR');

const backgroundCss = {
	backgroundImage: `url(https://eds.mymc.app/welcome.jpg)`,
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'center',
	backgroundAttachment: 'fixed',
	backgroundSize: 'cover',
	minHeight: '905px',
	position: 'relative',
};
const GridRowStyles = {
	backgroundColor: 'rgba(1, 1, 1, 0.7)',
	marginTop: '10px',
	marginBottom: '35px',
	maxWidth: '1000px',
};

export default function THR() {
	const {page} = useParams();
	const [screenSize, setScreenSize] = useState(window.innerWidth < 670 ? 'mobile' : 'desktop');

	useEffect(() => {
		window.scrollTo(500, 0);
	});

	useLayoutEffect(() => {
		function resize(val) {
			// @ts-ignore
			const width = val.target.innerWidth;
			if (width <= 670) setScreenSize('mobile');
			else if (width > 670 && width <= 1007) setScreenSize('tablet');
			else setScreenSize('desktop');
		}
		window.addEventListener('resize', resize);
		return () => {
			window.removeEventListener('resize', resize);
		};
	});

	function getContent() {
		let comp = <></>;
		switch (page) {
			case undefined:
			case 'home':
				comp = <THRContentHome screenSize={screenSize} />;
				break;
			case 'books':
				comp = <THRContentBooks />;
				break;
			case 'articles':
				comp = <ThrContentArticles />
				break;
			case 'research':
				comp = <THRContentResearch />;
				break;
			case 'services':
				comp = <THRContentServices />;
				break;
			case 'events':
				comp = <ThrContentEvents />;
				break;
			case 'contact':
				comp = <THRContentContact screenSize={screenSize} />;
				break;
			default:
				comp = (
					<Grid columns="equal" centered>
						<Grid.Row style={GridRowStyles} textAlign="center">
							<Grid.Column style={{color: 'white', fontSize: '2em'}} textAlign="center">
								<p>There is no content created for this page.</p>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				);
		}
		return comp;
	}

	return (
		<div style={backgroundCss as CSSProperties}>
			<THRHeaderBar screenSize={screenSize} />
			{getContent()}
			<THRFooterBar screenSize={screenSize} />
		</div>
	);
}
