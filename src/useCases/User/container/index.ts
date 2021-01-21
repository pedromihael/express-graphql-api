import 'reflect-metadata';
import { container } from 'tsyringe';
import FakeUsersRepository from '@entities/User/FakeUserRepository';
import IUserRepository from '@entities/User/IUserRepository';

container.registerSingleton<IUserRepository>('UsersRepository', FakeUsersRepository);
