import {User} from '../models';
export default function Users() {
	return {
		name: 'Users',
		startup: async () => {
			const user = new User();
			user.firstName = 'Test';
			user.lastName = 'Tickle';
			// this likely will error
			// i assume that it will require every field specified in the class
			return user.save();
		},
	};
}
