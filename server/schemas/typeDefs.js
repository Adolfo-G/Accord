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

  type Channel {
    _id: ID!
    channelName: String!
    date_created: Date!
    chats: [Chat]
    users: [User]
  }

  type Query {
    users: [User]
    chats: [Chat]
    channels: [Channel]
    events: [Event!]
  }

  type Mutation {
    createUser(_id: ID!, username: String!, email: String!, password: String!): User
    createChannel(_id: ID!, channelName: String!, date_created: Date!): Channel
  }

`;

module.exports = typeDefs;
