const { gql } = require('apollo-server-express');

const typeDefs = gql`
  scalar Date
  type Event {
    _id: ID!
    date: Date!
  }

  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
  }
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    events: [Event!]
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
  }

`;

module.exports = typeDefs;
