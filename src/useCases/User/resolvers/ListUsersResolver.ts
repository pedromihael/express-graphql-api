import 'reflect-metadata';
import IUserRepository from '@entities/User/IUserRepository';
import { inject, injectable } from 'tsyringe';
@injectable()
export default class ListUsersResolver {
  constructor(@inject('UsersRepository') private usersRepository: IUserRepository) {}

  async execute() {
    return {
      Query: {
        list: async (_, args, {}) => {
          let { name } = await args;
          const result = name ? await this.usersRepository.findByName(name) : await this.usersRepository.findAll();
          return result ? result : [];
        },
      },
    };
  }
}
