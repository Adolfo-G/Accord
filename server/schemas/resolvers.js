const { AuthenticationError } = require('apollo-server-express');
const { User, Thought } = require('../models');
const { signToken } = require('../utils/auth');
const { GraphQLUpload } = require('graphql-upload');
const { readFile } = require('../utils/file');
const { SingleFile } = require('../models/SingleUpload');
const { MultipleFile } = require('../models/MutipleUpload');

const resolvers = {
  Upload: GraphQLUpload,

  Query: {
    users: async () => {
      return User.find().populate('thoughts');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('thoughts');
    },
    thoughts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Thought.find(params).sort({ createdAt: -1 });
    },
    thought: async (parent, { thoughtId }) => {
      return Thought.findOne({ _id: thoughtId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('thoughts');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addThought: async (parent, { thoughtText, thoughtBody }, context) => {
      if (context.user) {
        const thought = await Thought.create({
          thoughtText,
          thoughtBody,
          thoughtAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { thoughts: thought._id } }
        );

        return thought;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    editThought: async (parent, { thoughtText, thoughtBody, thoughtId }, context) => {
        const UpdatedPost = await Thought.findOneAndUpdate(
          { _id: thoughtId },
          {
              thoughtText: thoughtText,
              thoughtBody: thoughtBody
          },
          {new:true}
        );

        return UpdatedPost;
    },
    addComment: async (parent, { thoughtId, commentText }, context) => {
      if (context.user) {
        return Thought.findOneAndUpdate(
          { _id: thoughtId },
          {
            $addToSet: {
              comments: { commentText, commentAuthor: context.user.username },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeThought: async (parent, { thoughtId }, context) => {
      if (context.user) {
        const thought = await Thought.findOneAndDelete({
          _id: thoughtId,
          thoughtAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { thoughts: thought._id } }
        );

        return thought;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeComment: async (parent, { thoughtId, commentId }, context) => {
      if (context.user) {
        return Thought.findOneAndUpdate(
          { _id: thoughtId },
          {
            $pull: {
              comments: {
                _id: commentId,
                commentAuthor: context.user.username,
              },
            },
          },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    singleUpload: async (_, { file }) => {
      const imageUrl = await readFile(file);
      const singlefile = new SingleFile({ image: imageUrl });
      await singlefile.save();
      return {
        message: 'File uploaded successfully!',
      };
    },
    multipleUpload: async (_, { file }) => {
      const imageUrl = await multipleReadFile(file);
      const multiplefile = new MultipleFile();
      multiplefile.images.push(...imageUrl);
      multiplefile.save();
      return {
        message: 'Multiple files uploaded successfully!',
      };
    },
  },
};

module.exports = resolvers;
