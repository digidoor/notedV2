const { gql } = require('apollo-server-express');

// this file was taken from an activity -- we need to change the info
const typeDefs = gql`
  type Event {
    _id: ID
    title: String!
    date: String!
    time: String
    description: String
    createdBy: User! 
  }

  type Note {
    _id: ID
    title: String
    content: String!
  }

  type Recipe {
    _id: ID
    url: String!
  }

  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    events: [Event]
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    events: [Event]
    event(_id: ID!): Event
    notes: [Note]
    recipies: [Recipe]
    users: [User]
    user: User
  }

  type Mutation {
    addNote(title: String, content: String!): Note
    removeUser: User
    addUser(username: String!, email: String!, password: String!): Auth
    updateUser(username: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
    addEvent(title: String!, date: String!, time: String, description: String): Event
  }
`;

module.exports = typeDefs;
