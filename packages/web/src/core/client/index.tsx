import React from 'react';
import {render} from 'react-dom';
import ImperiumClient from '@imperium/core/lib/ImperiumClient';

const client = new ImperiumClient();
client.start();

render(
	<div>
		hello world
	</div>,
	document.getElementById('root')
);
