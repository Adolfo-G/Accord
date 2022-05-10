import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
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
      }
    }
  }
`;

export const ADD_THOUGHT = gql`
  mutation addThought($thoughtText: String!, $thoughtBody: String!) {
    addThought(thoughtText: $thoughtText, thoughtBody: $thoughtBody) {
      _id
      thoughtText
      thoughtBody
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($thoughtId: ID!, $commentText: String!) {
    addComment(thoughtId: $thoughtId, commentText: $commentText) {
      _id
      thoughtText
      thoughtBody
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;

export const EDIT_THOUGHT = gql`
  mutation editThought($thoughtText: String!, $thoughtBody: String!, $thoughtId:ID!) {
    editThought(thoughtText: $thoughtText, thoughtBody: $thoughtBody, thoughtId: $thoughtId) {
      _id
      thoughtText
      thoughtBody
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
      }
    }
  }
`;
