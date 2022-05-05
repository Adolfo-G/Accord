import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation createUser($username: String! $email: String! $password: String!) {
    createUser(username: $username email: $email password: $password) {
      _id
      username
      email
      password
    }
  }
`;

export const CREATE_CHANNEL = gql`
  mutation createChannel($channelName: String! $date_created: Date!) {
    createChannel(channelName: $channelName date_created: $date_created) {
      _id
      channelName
      date_created
    }
  }
`;
