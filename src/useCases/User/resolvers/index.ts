import { container } from 'tsyringe';
import ListUsersResolvers from './ListUsersResolver';

export default class Resolvers {
  async getResolvers() {
    const userResolver = container.resolve(ListUsersResolvers);
    const dependenciesResolvedUserResolver = await userResolver.execute();

    return { users_list: dependenciesResolvedUserResolver };
  }
}
