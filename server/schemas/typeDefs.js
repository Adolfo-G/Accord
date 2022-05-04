const { gql } = require('apollo-server-express');

const typeDefs = gql`
  scalar Date
  type Event {
    id: ID!
    date: Date!
  }
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    chats: [Chat]
  }

  type Chat {
    _id: ID!
    username: String!
    message: String!
    date_created: Date!
  }

  type Query {
    user: [User]
    chats: [Chat]
    events: [Event!]
  }
  type Mutation {
    createUser(username: String!, email: String!, password: String!): User
  }

`;

module.exports = typeDefs;
