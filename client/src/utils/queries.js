import { gql } from '@apollo/client';

export const QUERY_USER = gql`
    query Query {
      users {
        username
        email
        password
      }
    }
`;

export const QUERY_CHANNELS = gql`
    query Query {
      channels {
        channelName
        _id
        date_created
      }
    }
`;