import models from './models';
export default function Users() {
	return {
		name: 'Users',
		models: () => models,
	};
}
