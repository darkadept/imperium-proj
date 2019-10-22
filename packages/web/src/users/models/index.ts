import {BaseEntity, Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from 'typeorm';

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
class Permission extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column('varchar')
	name: string;
}

@Entity()
class Role extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column('varchar')
	name: string;

	@ManyToMany(type => Permission)
	@JoinTable()
	permissions: Permission[];
}

@Entity()
class User extends BaseEntity implements ILoginable, IResource {
	@PrimaryGeneratedColumn()
	id: number;

	@Column('varchar')
	firstName: string;

	@Column('varchar')
	lastName: string;

	@Column('varchar')
	email: string;

	@Column('varchar')
	passwordHash: string;

	@Column(type => Permission)
	permissions: Permission[];

	@Column(type => Role)
	roles: Role[];

	@ManyToMany(type => Account, account => account.members)
	accounts?: Account[];
}

@Entity()
class Account extends BaseEntity implements IResource {
	@PrimaryGeneratedColumn()
	id: number;

	@Column('integer')
	number: number;

	@Column('varchar')
	name: string;

	@Column(type => Permission)
	permissions: Permission[];

	@ManyToMany(type => User, member => member.accounts)
	members: User[];
}

export {Permission, User, Account, Role, IResource, ILoginable};