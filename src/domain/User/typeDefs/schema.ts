import { gql } from 'apollo-server-express';

const typeDefs = gql`
  input UserFilter {
    name: String
  }

  type Query {
    list(name: String): [User]
  }

  type User {
    _id: ID!
    index: Int!
    picture: String
    age: Int!
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
