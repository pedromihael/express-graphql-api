import 'reflect-metadata';
import IUserRepository from '@entities/User/IUserRepository';
import { inject, injectable } from 'tsyringe';
import { User } from '@domain/User/User';
@injectable()
export default class ListUsersResolver {
  constructor(@inject('UsersRepository') private usersRepository: IUserRepository) {}

  async execute() {
    return {
      Query: {
        list: async (_, args, {}) => {
          const { name } = args;
          let foundUsers: User[];

          if (name) {
            foundUsers = await this.usersRepository.findByName(name);
          } else {
            foundUsers = await this.usersRepository.findAll();
          }

          return foundUsers ? foundUsers : [];
        },
      },
    };
  }
}
