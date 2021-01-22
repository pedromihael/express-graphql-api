import 'reflect-metadata';

import express from 'express';
import fs from 'fs';
import path from 'path';
import morgan from 'morgan';
import { ApolloServer } from 'apollo-server-express';
import UserTypeDefs from '@domain/User/typeDefs';
import UserResolvers from '@useCases/User/resolvers';

import '@useCases/User/container';

(async () => {
  const app = express();
  app.disable('x-powered-by');

  const usersResolvers = new UserResolvers();
  const { users_list } = await usersResolvers.getResolvers();

  const apolloServer = new ApolloServer({
    typeDefs: UserTypeDefs,
    resolvers: users_list,
    playground: true,
    context: ({ req, res }) => ({ req, res }),
  });

  app.set('trust proxy', true);

  const logsFile = fs.createWriteStream(path.join(__dirname, 'requests.log'), { flags: 'a' });

  app.use(
    morgan('combined', {
      stream: logsFile,
    }),
  );

  apolloServer.applyMiddleware({ app, cors: true });

  app.listen({ port: 4000 }, () => {
    console.log(`Graphql-Express server is running on http://localhost:4000${apolloServer.graphqlPath}!`);
  });
})();
