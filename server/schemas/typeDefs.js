const { gql } = require('apollo-server-express');

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
    createdBy: User!
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
    recipies: [Recipe]
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
    addRecipe(url: String!): Recipe
    removeRecipe(url: String!): Recipe
    addNote(title: String, content: String!): Note
    editNote(_id: ID!, title: String, content: String!): Note
    removeNote(_id: ID!): Note
    addUser(username: String!, email: String!, password: String!): Auth
    updateUser(username: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
    removeUser: User
    addEvent(title: String!, date: String!, time: String, description: String): Event
    editEvent(_id: ID! title: String!, date: String!, time: String, description: String): Event
    removeEvent(_id: ID!): Event
    
  }
`;

module.exports = typeDefs;
