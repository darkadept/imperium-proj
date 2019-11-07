import React from 'react';
import {User} from '../models';

export default function Users(props) {
	return (
		<div>
			<p>Users will be listed here.</p>
			{process.env.debug}
			{/*<ul>*/}
			{/*	{User.find().then(users =>*/}
			{/*		users.map(user => (*/}
			{/*			<li key={user.id}>*/}
			{/*				{user.firstName}, {user.lastName}*/}
			{/*			</li>*/}
			{/*		)),*/}
			{/*	)}*/}
			{/*</ul>*/}
		</div>
	);
}
