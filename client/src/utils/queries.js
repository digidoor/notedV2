import { gql } from '@apollo/client';

export const QUERY_NOTES = gql`
  query allNotes {
    notes {
      _id
      content
    }
  }
`
export const QUERY_RECIPES = gql`
  query allRecipes {
    recipes {
      _id
      title
      url
    }
  }
`

export const QUERY_USERS = gql`
  query allUsers {
    users {
      _id
      username
      email
      password
    }
  }
`

export const QUERY_PROFILES = gql`
  query allProfiles {
    profiles {
      _id
      username
    }
  }
`;

export const QUERY_SINGLE_PROFILE = gql`
  query singleProfile($profileId: ID!) {
    profile(profileId: $profileId) {
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
