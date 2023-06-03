const { AuthenticationError } = require('apollo-server-express');
const { User, Note, Recipe, Event } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    notes: async (parent, arg, context) => {
      if (context.user) {
        const notes = await Note.find({createdBy: context.user._id}).sort({ date: 1 });
        return notes ? notes : [];
      }
      throw new AuthenticationError('Not Logged in');
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
    addNote: async (parent, content,  context) => {
      if (context.user) {
        const note = await Note.create({
          ...content,
          createdBy: context.user._id});
        await User.findByIdAndUpdate(context.user._id, { $push: { notes: note } });
        
        return note;
      }
      throw new AuthenticationError('Not Logged in');
    },
    addEvent: async (parent,  content , context) => {
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
    addRecipe: async (parent, { url }, context) => {
     // if (context.user) {
        return await Recipe.create({url});
        //await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });
     // }
      //throw new AuthenticationError('Not logged in');
    },
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
    removeNote: async (parent, id , context) => {
      console.log(id);
      if (context.user) {
        const note = await Note.findOneAndDelete({ _id: id._id });
        await User.findByIdAndUpdate(context.user._id, { $pull: { notes: note._id}});
        return note;
      }
      throw new AuthenticationError('Not Logged in');
    },
    removeAllNotes: async (parent, args, context) => {
      if (context.user) {
        const note = await Note.deleteMany({createdBy: context.user._id});
        console.log(note);
        const user = await User.findByIdAndUpdate(context.user._id, { notes: []})
        return user;
      }
      throw new AuthenticationError('Not Logged in');
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
