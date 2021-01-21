import { User } from '~/domain/User/User';
import { UserDTO } from '~/domain/User/UserDTO';
import IUserRepository from '../IUserRepository';
import mock from './mock';

export default class FakeUsersRepository implements IUserRepository {
  users = mock;

  async delete(id: any): Promise<void> {
    this.users = this.users.filter((user) => user._id !== id);
  }

  async findAll(): Promise<User[]> {
    return this.users;
  }

  async findById(id: any): Promise<User> {
    return this.users.find((user) => user._id === id);
  }

  async findByName(name: string): Promise<User[]> {
    return this.users.filter((user) => user.name === name);
  }

  async save(user: User): Promise<User> {
    const foundIndex = this.users.findIndex((thisUser) => thisUser._id === user._id);

    this.users[foundIndex] = user;

    return user;
  }

  async create(user: UserDTO): Promise<User> {
    this.users = [...this.users, user];
    return user;
  }
}
