import { gql } from '@apollo/client';

export const QUERY_NOTES = gql`
  query allNotes {
    notes {
      _id
      title
      content
      createdBy {
        _id
      }
    }
  }
`;
export const QUERY_RECIPES = gql`
  query allRecipes {
    recipes {
      _id
      title
      url
    }
  }
`;

export const QUERY_USERS = gql`
  query allUsers {
    users {
      _id
      username
      email
      password
    }
  }
`;

export const GET_EVENTS = gql`
  query getEvents {
     events {
      _id
      title
      date
      time
      description
      createdBy {
        _id
      }
    }
  }
`;

export const GET_SINGLE_EVENT = gql`
  query getSingleEvent($eventId: ID!) {
    event(eventId: $eventId) {
      _id
      username
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
    }
  }
`;
