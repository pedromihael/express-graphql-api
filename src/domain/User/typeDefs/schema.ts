import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Query {
    # listar: [Users!]!
    listar(name: String!): User
  }

  type User {
    _id: ID!
    index: Int!
    picture: String
    age: String!
    eyeColor: String
    name: String!
    company: String
    email: String!
    phone: String!
    greeting: String
    friends: [User!]
  }
`;

export default typeDefs;
