import React from 'react';
import {checkPermissions} from '@imperium/auth/index.js';
// import {NotificationSystem} from '@thx/notifications';
// import {DialogSystem} from '@thx/dialog';
// import {ApolloProvider} from 'react-apollo';

export default function rootRender(inner) {
	return (
		<div id="this_is_from_the_project">
			{inner({checkPermissions})}
		</div>
	);
}
