const { gql } = require('apollo-server-express');

const typeDefs = gql`
  scalar Date
  type Event {
    id: ID!
    date: Date!
  }

  type User {
    _id: ID! 
    displayName: String!
    userName: String!
    password: String!
    email: String!
    photo: String!
    uid: String!
  }

  type Chat {
    _id: ID!
    message: String!
    timeStamp: String!
    dateCreated: Date!
    user:[User]
  }

  type Channel {
    _id: ID!
    channelName: String!
    chat: [Chat]
  }


  type Query {
    users: [User]
    chats: [Chat]
    channels: [Channel]
    events: [Event]
  }

  type Mutation {
    createUser(displayName: String!, userName: String!, password: String!, email: String!, photo: String!, uid: String!): User
    createChat(message: String!, timeStamp: String!, dateCreated: Date!): Chat
    createChannel(channelName: String!): Channel
  }

`;

module.exports = typeDefs;
