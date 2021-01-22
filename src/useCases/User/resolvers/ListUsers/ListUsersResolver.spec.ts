import { v4 as uuidv4 } from 'uuid';

import MockUsersRepository from '@entities/User/MockUserRepository';
import IUserRepository from '@entities/User/IUserRepository';
import ListUsersResolver from './ListUsersResolver';
import UserBuilder from '@helpers/builders/UserBuilder';

let usersRepository: IUserRepository;
let listUsersResolver: ListUsersResolver;
let userId: any;

describe('ListUsersResolver', () => {
  beforeEach(() => {
    usersRepository = new MockUsersRepository();
    listUsersResolver = new ListUsersResolver(usersRepository);
    userId = uuidv4();
  });

  it('should list all users if no arg is provided', async () => {
    const userData = new UserBuilder(userId).build();

    await usersRepository.create(userData);

    const resolver = await listUsersResolver.execute();
    const result = await resolver.Query.list('', '', {});

    expect(result).not.toBe([]);
  });

  it('should list users with name mateched by arg regex', async () => {
    const userId2 = uuidv4();
    const userId3 = uuidv4();
    const userId4 = uuidv4();

    const userData1 = new UserBuilder(userId).setName('Pedro').build();
    const userData2 = new UserBuilder(userId2).setName('Pencio').build();
    const userData3 = new UserBuilder(userId3).setName('abcpedro').build();
    const userData4 = new UserBuilder(userId4).setName('mihael').build();

    const userDatas = [userData1, userData2, userData3, userData4];

    userDatas.map(async (userData) => {
      await usersRepository.create(userData);
    });

    const resolver = await listUsersResolver.execute();
    const result = await resolver.Query.list('', { name: 'Pedro' }, {});

    expect(result).toEqual(expect.arrayContaining([userData1, userData2, userData3]));
    expect(result).not.toEqual(expect.arrayContaining([userData4]));
  });

  // it('should list no user if arg providade does not match regex');
});
