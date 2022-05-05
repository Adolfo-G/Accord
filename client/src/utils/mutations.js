import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation createUser(_id: ID!, username: String!, email: String!, password: String!) {
    createUser(_id: ID!, username: String!, email: String!, password: String!) {
      _id
      username
      email
      password
    }
  }
`;

export const CREATE_CHANNEL = gql`
  mutation createChannel(_id: ID!, channelName: String!, date_created: Date!) {
    createChannel(_id: ID!, channelName: String!, date_created: Date!) {
      _id
      channelName
      date_created
    }
  }
`;
