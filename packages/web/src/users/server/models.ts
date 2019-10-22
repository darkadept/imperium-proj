import {Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from 'typeorm';

/* https://stackoverflow.com/a/195556/7704062
	The basic actors of an RBAC are:
		Resources.
		Permissions.
		Users.
		Roles (i.e. Groups).
	Resources <- require -> (one or many) Permissions.
	Roles <- are collections of -> (one or many) Permissions.
	Users <- can have -> (one or many) Roles.
*/

interface ILoginable {
	email: string;
	passwordHash: string;
}
interface IResource {
	permissions: Permission[];
}

@Entity()
class Permission {
	@PrimaryGeneratedColumn()
	id: number;

	@Column('string')
	name: string;

	constructor(name: string) {
		this.name = name;
	}
}

@Entity()
class Role {
	@PrimaryGeneratedColumn()
	id: number;

	@Column('string')
	name: string;

	@ManyToMany(type => Permission)
	@JoinTable()
	permissions: Permission[];
}

@Entity()
class User implements ILoginable, IResource {
	@PrimaryGeneratedColumn()
	id: number;

	@Column('string')
	firstName: string;

	@Column('string')
	lastName: string;

	@Column('string')
	email: string;

	@Column('string')
	passwordHash: string;

	@Column(type => Permission)
	permissions: Permission[];

	@Column(type => Role)
	roles: Role[];

	@ManyToMany(type => Account, account => account.members)
	accounts?: Account[];
}

@Entity()
class Account implements IResource {
	@PrimaryGeneratedColumn()
	id: number;

	@Column('number')
	number: number;

	@Column('string')
	name: string;

	@Column(type => Permission)
	permissions: Permission[];

	@ManyToMany(type => User, member => member.accounts)
	members: User[];
}

export {Permission, User, Account, Role, IResource, ILoginable};
