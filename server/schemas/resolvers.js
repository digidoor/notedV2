const { AuthenticationError } = require('apollo-server-express');
const { User, Note, Recipe, Event } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

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
    events: async () => {
      return await Event.find();
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
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addNote: async (parent, args, context) =>
    {// do without associating with a user for now
      //console.log(context);
      console.log(args);
      console.log(args.content);
      //const note = new Note({ content }); console.log(note);
      return await Note.create(args);
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
    // addEvent: async (parent, { content }, context) => {
    //   console.log(context);
    //   if (context.user) {
    //     const event = new Event({ content });

    //     //await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });

    //     return event;
    //   }
    //   throw new AuthenticationError('Not logged in');
    // },
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
    }
  }
};

module.exports = resolvers;
