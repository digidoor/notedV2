const { AuthenticationError } = require('apollo-server-express');
const { User, Note, Recipe, Event } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  // Date: new GraphQLScalarType({
  //   name: 'Date',
  //   description: 'Date custom scalar type',
  //   parseValue(value) {
  //       return new Date(value); // value from the client
  //   },
  //   serialize(value) {
  //       return value.getTime(); // value sent to the client
  //   },
  //   parseLiteral(ast) {
  //       if (ast.kind === Kind.INT) {
  //       return parseInt(ast.value, 10); // ast value is always in string format
  //       }
  //       return null;
  //   },
  // }),

  Query: {
    notes: async () => {
      return await Note.find();
    },
    events: async (parent, arg, context) => {
      if (context.user) {
        console.log(context.user);
        const events = await Event.find({createdBy: context.user._id}).sort({ date: 1 });
        return events ? events : [];
      }
      throw new AuthenticationError('Not Logged in');
    },
    recipies: async (p) => {
      return await Recipe.find();
    },
    users: async () => {
      return await User.find();
    },
    user: async (parent, args, context) => {
      if (context.user) {
        return await User.findById(context.user._id);
      }
      throw new AuthenticationError('Not logged in');
    },
    event: async (parent, { eventId }, context) => {
      if (context.user) {
        return Event.findOne({ _id: eventId });
      }
      throw new AuthenticationError('Not Logged in');
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addNote: async (parent, { content }, context) =>
    {// do without associating with a user for now
      console.log(content);
      //const note = new Note({ content }); console.log(note);
      return await Note.create({
        title,
        content,
        createdBy: context.user._id});
    },
    // addNote: async (parent, { content }, context) => {
    //   console.log(context);
    //   if (context.user) {
    //     const note = new Note({ content });

    //     //await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });

    //     return note;
    //   }
    //   throw new AuthenticationError('Not logged in');
    // },
    addEvent: async (parent,  content , context) => {
      console.log(context.user);
      console.log({content});
      if (context.user) {
        const event = await Event.create({
          ...content,
          createdBy: context.user._id 
        });
        await User.findByIdAndUpdate(context.user._id, { $push: { events: event } });

        return event;
      }
      throw new AuthenticationError('Not logged in');
    },
    // addRecipe: async (parent, { content }, context) => {
    //   console.log(context);
    //   if (context.user) {
    //     const recipe = new Recipe({ content });
    //     //await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });
    //     return recipe;
    //   }
    //   throw new AuthenticationError('Not logged in');
    // },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw new AuthenticationError('Not logged in');
    },

    removeUser: async (parent, args, context) => {
      if (context.user) {
        return User.findOneAndDelete({ _id: context.user._id });
      }
      throw new AuthenticationError('Not logged in');
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
  },
}

module.exports = resolvers;
