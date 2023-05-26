const { gql } = require('apollo-server-express');

// this file was taken from an activity -- we need to change the info
const typeDefs = gql`
  type Event {
    _id: ID
    content: String!
  }

  type Note {
    _id: ID
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
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    events: [Event]
    notes: [Note]
    recipies: [Recipe]
    users: [User]
    user: User
  }

  type Mutation {
    removeUser: User
    addUser(username: String!, email: String!, password: String!): Auth
    updateUser(username: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
