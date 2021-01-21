import 'reflect-metadata';

import express from 'express';
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

  apolloServer.applyMiddleware({ app, cors: false });

  app.listen({ port: 4000 }, () => {
    console.log(`Graphql-Express server is running on http://localhost:4000${apolloServer.graphqlPath}!`);
  });
})();
