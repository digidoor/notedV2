// example from activity. May need to be altered
import { gql } from '@apollo/client';

export const ADD_NOTE = gql`
  mutation addNote($title: String, $content: String!) {
    addNote( title: $title, content: $content ) {
      _id
      title
      content
      createdBy {
        _id
      }
    }
  }
`;

export const REMOVE_NOTE = gql`
  mutation removeNote($_id: ID!) {
    removeNote( _id: $_id) {
      _id
      title
      content
      createdBy {
        _id
      }
    }
  }`;

  export const EDIT_NOTE = gql`
    mutation editNote($_id: ID! $title: String, $content: String!) {
      editNote(_id: $_id, title: $title, content: $content) {
        _id
        title
        content
        createdBy {
          _id
        }
      }
    }`;


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
      createdBy {
        _id
      }
    }
  }
  `;
  export const EDIT_EVENT = gql`
    mutation editEvent($_id: ID! $title: String!, $date: String!, $time: String, $description: String) {
      editEvent(_id: $_id, title: $title, date: $date, time: $time, description: $description) {
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
  export const REMOVE_EVENT = gql`
    mutation removeEvent($_id: ID!) {
      removeEvent( _id: $_id) { 
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

  export const ADD_RECIPE = gql`
  mutation addRecipe($url: String!) {
    addRecipe(url: $url) {
      _id
      url
    }
  }
`;

export const REMOVE_RECIPE = gql`
mutation removeRecipe($url: String!) {
  removeRecipe(url: $url){
    _id
    url
  }
}`;