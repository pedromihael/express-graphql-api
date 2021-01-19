import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import UserTypeDefs from '@domain/User/typeDefs';
import UserResolvers from '@useCases/User/resolvers';

(async () => {
  const app = express();
  app.disable('x-powered-by');

  const apolloServer = new ApolloServer({
    typeDefs: UserTypeDefs,
    resolvers: UserResolvers,
    playground: true,
    context: ({ req, res }) => ({ req, res }),
  });

  apolloServer.applyMiddleware({ app, cors: false });

  app.listen({ port: 4000 }, () => {
    console.log(`Graphql-Express server is running on http://localhost:4000${apolloServer.graphqlPath}!`);
  });
})();
