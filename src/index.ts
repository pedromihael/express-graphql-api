import 'reflect-metadata';
import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { typeDefs } from '@typeDefs/index';
import { resolvers } from '@resolvers/index';

(async () => {
  const app = express();

  app.disable('x-powered-by');

  const apolloServer = new ApolloServer({
    // schema: await buildSchema({
    // resolvers: [resolver]
    // }),
    typeDefs,
    resolvers,
    playground: true,
    context: ({ req, res }) => ({ req, res }),
  });

  apolloServer.applyMiddleware({ app, cors: false });

  app.listen({ port: 4000 }, () => {
    console.log(`Graphql-Express server is running on http://localhost4000:${apolloServer.graphqlPath}!`);
  });
})();
