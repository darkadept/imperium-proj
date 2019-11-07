import {getRepository} from 'typeorm';
import {User} from './models';

export default function Users() {
	return {
		name: 'users',
		startup: async () => {
			// const userRepo = getRepository(User);
			// const user = new User();
			// user.firstName = 'Test';
			// user.lastName = 'Tickle';
			// // this likely will error
			// // i assume that it will require every field specified in the class
			// await userRepo.save(user);
		},
	};
}
