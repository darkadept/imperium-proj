import debug from 'debug';
import React from 'react';
import {Grid} from 'semantic-ui-react';
import {useHistory} from 'react-router-dom';

const d = debug('app.web.ThrHomePage.ThrContentHome');
const GridRowStyles = {
	backgroundColor: 'rgba(1, 1, 1, 0.7)',
	marginTop: '10px',
	marginBottom: '10px',
	maxWidth: '1000px',
};
interface Props {
	screenSize: string;
}

export default function ThrContentHome(props: Props) {
	const history = useHistory();
	const isMobile = props.screenSize === 'mobile';

	return (
		<Grid centered columns="equal" stackable style={{paddingBottom: '66px'}}>
			<Grid.Row style={GridRowStyles}>
				<Grid.Column>
					<Grid columns="equal">
						<Grid.Row>
							<Grid.Column>
								{/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
								<img
									onClick={() => history.push('/thr/contact')}
									style={{cursor: 'pointer'}}
									alt="locations"
									src="https://makingyourmilescount.com/wp-content/uploads/2018/01/Slide-1.jpg"
								/>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Grid.Column>
				<Grid.Column only="widescreen">
					<img
						alt="COAST TO COAST"
						src="https://makingyourmilescount.com/wp-content/themes/ST_Light_Responsive_Business/img/header-right.png"
					/>
				</Grid.Column>
			</Grid.Row>

			<Grid.Row style={GridRowStyles}>
				{isMobile ? null : (
					<Grid.Column>
						<img
							style={{maxWidth: '100%', height: 'auto'}}
							alt="COMMITTED TO HELPING YOU MAKE YOUR MILES COUNT"
							src="../../../../assets/fall-highway.webp"
						/>
					</Grid.Column>
				)}
				<Grid.Column style={{minHeight: '200px'}} textAlign="center" stretched>
					<span style={{color: 'rgb(217, 128, 48)', fontSize: '3em', marginTop: 10}}>COMMITTED</span>
					<span style={{color: 'rgb(189, 197, 73)', fontSize: '2em'}}>To Helping YOU</span>
					<span style={{color: 'rgb(189, 197, 73)', fontSize: '2em'}}>Make YOUR Miles</span>
					<span style={{color: 'rgb(217, 128, 48)', fontSize: '3em'}}>Count</span>
				</Grid.Column>
			</Grid.Row>

			<Grid.Row style={GridRowStyles}>
				{isMobile ? null : (
					<Grid.Column textAlign="center">
						{/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
						<img
							style={{maxWidth: '100%', height: 'auto', cursor: 'pointer'}}
							onClick={() => history.push('/thr/books')}
							alt="COMMITTED TO HELPING YOU MAKE YOUR MILES COUNT"
							src="https://makingyourmilescount.com/wp-content/uploads/2015/05/CHOOSING-A-TRUCKING-COMPANY-Low-Resolution-Copy-214x300.jpg"
						/>
					</Grid.Column>
				)}
				<Grid.Column
					style={{minHeight: '200px', paddingTop: '30px'}}
					textAlign="center"
					stretched
					onClick={() => {
						if (isMobile) {
							window.scrollTo(0, 0);
							history.push('/thr/books');
						}
					}}
				>
					<p style={{color: 'rgb(189, 197, 73)', fontSize: '2em'}}>Get the latest book by</p>
					<p style={{color: 'rgb(217, 128, 48)', fontSize: '3em'}}>Robert Scheper</p>
				</Grid.Column>
			</Grid.Row>
		</Grid>
	);
}
