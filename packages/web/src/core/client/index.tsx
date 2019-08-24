import React from 'react';
import {render} from 'react-dom';
import client from '@imperium/core/lib/client';

client();
render(
	<div>
		hello world
	</div>,
	document.getElementById('root')
);
