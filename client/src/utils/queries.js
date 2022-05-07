import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      thoughts
      Posts {
        _id
        title
        content
      }
    }
  }
`;
