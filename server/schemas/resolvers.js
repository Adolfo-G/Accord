const { User, Chat, Channel } = require('../models');
const { GraphQLScalarType, Kind } = require('graphql');

const dateScalar = new GraphQLScalarType({
  name: 'Date',
  description: 'Date custom scalar type',
  serialize(value) {
    return value.getTime(); // Convert outgoing Date to integer for JSON
  },
  parseValue(value) {
    return new Date(value); // Convert incoming integer to Date
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      return new Date(parseInt(ast.value, 10)); // Convert hard-coded AST string to integer and then to Date
    }
    return null; // Invalid hard-coded value (not an integer)
  },
});

const resolvers = {
  Date: dateScalar.parseValue(),
  Query: {
    users: async () => {
      return User.findAll();
    },
    chats: async () => {
      return Chat.findAll();
    },
    channels: async () => {
      return Channel.findAll();
    },
  },
  Mutation:{
    createUser: async (parent, args) => {
      const newUser = await User.create(args);
      return newUser;
    },
    createChannel: async (parent, args) => {
      const newChannel = await Channel.create(args);
      return newChannel;
    },
  }
  
};

module.exports = resolvers;
