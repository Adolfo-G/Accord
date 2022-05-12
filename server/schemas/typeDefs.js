const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    thoughts: [Thought]!
  }

  type Thought {
    _id: ID
    thoughtText: String
    thoughtBody: String
    thoughtAuthor: String
    createdAt: String
    comments: [Comment]!
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
    thoughtId: String
  }

  type SuccessMessage {
    message: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    getAllThoughts: [Thought]
    usersThoughts(username: String!): [Thought]
    thought(thoughtId: ID!): Thought
    comments(username: String!): [Comment]
    comment(commentId: ID!): Comment
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    addComment(
      commentText: String!
      commentAuthor: String!
      thoughtId: String!
    ): Comment
    addThought(thoughtText: String!, thoughtBody: String!): Thought
    editThought(
      thoughtText: String!
      thoughtBody: String!
      thoughtId: ID!
    ): Thought
    removeComment(thoughtId: ID!, commentId: ID!): Comment
    removeThought(thoughtId: ID!): Thought
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
