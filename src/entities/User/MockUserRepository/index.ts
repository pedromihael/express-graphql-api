import { User } from '~/domain/User/User';
import { UserDTO } from '~/domain/User/UserDTO';
import IUserRepository from '../IUserRepository';
import mock from './mock';

let users = mock;
export default class MockUsersRepository implements IUserRepository {
  async delete(id: any): Promise<void> {
    users = users.filter((user) => user._id !== id);
  }

  async findAll(): Promise<User[]> {
    return users;
  }

  async findById(id: any): Promise<User | undefined> {
    return users.find((user) => user._id === id);
  }

  async findByName(name: string): Promise<User[]> {
    return users.filter((user) => new RegExp(`${name[0]}${name[1]}`, 'gi').test(user.name));
  }

  async save(user: User): Promise<User> {
    const foundIndex = users.findIndex((thisUser) => thisUser._id === user._id);

    users[foundIndex] = user;

    return user;
  }

  async create(user: UserDTO): Promise<User> {
    users = [...users, user];
    return user;
  }
}
