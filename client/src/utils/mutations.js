// example from activity. May need to be altered
import { gql } from '@apollo/client';

export const ADD_NOTE = gql`
  mutation addNote($content: String!) {
    addNote( content: $content ) {
      _id
      content
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        password
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
        password
      }
    }
  }
`;

export const ADD_EVENT = gql`
  mutation addEvent($title: String!, $date: String!, $time: String, $description: String) {
    addEvent(title: $title, date: $date, time: $time, description: $description) {
      _id
      title
      date
      time
      description
    }
  }
  `;

  export const ADD_RECIPE = gql`
  mutation addRecipe($title: String!, $url: String!) {
    addRecipe(title: $title, url: $url) {
      _id
      title
      url
    }
  }
`;