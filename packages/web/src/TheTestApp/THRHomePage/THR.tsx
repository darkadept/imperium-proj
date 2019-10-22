import debug from 'debug';
import React, {CSSProperties, useLayoutEffect, useState} from 'react';
import THRHeaderBar from './THRBars/THRHeaderBar';
import THRFooterBar from './THRBars/THRFooterBar';
import THRContentHome from './THRContent/THRContentHome';
import THRContentBooks from './THRContent/THRContentBooks';
import THRContentContact from './THRContent/THRContentContact';

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

export default function THR() {
	const [screenSize, setScreenSize] = useState(window.innerWidth < 670 ? 'mobile' : 'desktop');

	useLayoutEffect(() => {
		window.addEventListener('resize', val => {
			// @ts-ignore
			const width = val.target.innerWidth;
			if (width <= 670) setScreenSize('mobile');
			else if (width > 670 && width <= 1007) setScreenSize('tablet');
			else setScreenSize('desktop');
			return () => {
				window.removeEventListener('resize', () => {});
			};
		});
	});

	return (
		<div style={backgroundCss as CSSProperties}>
			<THRHeaderBar screenSize={screenSize} />
			<THRContentBooks screenSize={screenSize} />
			<THRContentContact screenSize={screenSize} />
			<THRContentHome screenSize={screenSize} />
			<THRFooterBar screenSize={screenSize} />
		</div>
	);
}
