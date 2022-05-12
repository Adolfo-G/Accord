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
        commentAuthor
        createdAt
        thoughtId
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($commentText: String!, $commentAuthor: String!, $thoughtId: String!) {
    addComment(commentText: $commentText, commentAuthor: $commentAuthor, thoughtId: $thoughtId) {
        _id
        commentText
        commentAuthor
        createdAt
        thoughtId
    }
  }
`;

export const SINGLE_UPLOAD = gql`
  mutation singleUpload($file: Upload!) {
    singleUpload(file: $file) {
      message
    }
  }
`;

export const MULTIPLE_UPLOAD = gql`
  mutation multipleUpload($file: [Upload]!) {
    multipleUpload(file: $file) {
      message
    }
  }
`;

export const EDIT_THOUGHT = gql`
  mutation editThought(
    $thoughtText: String!
    $thoughtBody: String!
    $thoughtId: ID!
  ) {
    editThought(
      thoughtText: $thoughtText
      thoughtBody: $thoughtBody
      thoughtId: $thoughtId
    ) {
      _id
      thoughtText
      thoughtBody
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
        commentAuthor
        createdAt
        thoughtId
      }
    }
  }
`;

export const REMOVE_THOUGHT = gql`
  mutation removeThought($thoughtId:ID!) {
    removeThought(thoughtId: $thoughtId) {
      _id
      thoughtText
      thoughtBody
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
        commentAuthor
        createdAt
        thoughtId
      }
    }
  }
`;
