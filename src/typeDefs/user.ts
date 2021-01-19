import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    _id: String!
    index: Number!
    picture: String
    age: String!
    eyeColor: String
    name: String!
    company: String
    email: String!
    phone: String!
    friends: [Users!]
    greeting: String
  }
`;
