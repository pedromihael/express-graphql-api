import { v4 as uuidv4 } from 'uuid';

import FakeUsersRepository from '~/entities/User/MockUserRepository';
import IUserRepository from '~/entities/User/IUserRepository';
import ListUsersResolver from './ListUsersResolver';
import UserBuilder from '~/helpers/builders/UserBuilder';

let usersRepository: IUserRepository;
let listUsersResolver: ListUsersResolver;

describe('ListUsersResolver', () => {
  beforeEach(() => {
    usersRepository = new FakeUsersRepository();
    listUsersResolver = new ListUsersResolver(usersRepository);
  });

  it('should list all users if no arg is provided', async () => {
    const userId = uuidv4();
    const userData = new UserBuilder(userId).build();

    await usersRepository.create(userData);

    const resolver = await listUsersResolver.execute();
    const result = await resolver.Query.list('', '', {});

    expect(result).not.toBe(null);
  });

  // it('should list users with name mateched by arg regex');

  // it('should list no user if arg providade does not match regex');
});
