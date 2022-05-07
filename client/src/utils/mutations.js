import { gql } from '@apollo/client';

export const CREATE_USER = gql`
mutation createUser($username: String!, $email: String!, $password: String!) {
  createUser(username: $username, email: $email, password: $password) {
    token
    user {
      _id
      username
    }
  }
}
`;

export const UPDATE_USER = gql`
  mutation updateUser($username: String!) {
    updateUser(username: $username) {
     _id
     username
   }
  }
`;

export const ADD_POST = gql`
  mutation addPost($username: String! $title: String! $content: String!) {
   addPost(title: String! content: String!) {
    _id  
    username
     Posts {
       postId 
       title
       content
     }
    }
  }
`;

export const DELETE_BOOK = gql`
  mutation removePost($postID: ID!) {
    removePost(post: $postID) {
      _id
      username
      Posts {
        postID
        title
        content
      }
    }
  }
`;

