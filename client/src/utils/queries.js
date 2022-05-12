import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      thoughts {
        _id
        thoughtText
        thoughtBody
        createdAt
      }
    }
  }
`;

export const QUERY_THOUGHTS = gql`
  query{
    getAllThoughts {
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

export const QUERY_SINGLE_THOUGHT = gql`
  query getSingleThought($thoughtId: ID!) {
    thought(thoughtId: $thoughtId) {
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

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      thoughts {
        _id
        thoughtText
        thoughtBody
        thoughtAuthor
        createdAt
      }
    }
  }
`;
export const QUERY_COMMENTS = gql`
  query getComments {
    comments {
      _id
      commentText
      commentAuthor
      createdAt
      thoughtId
    }
  }
`;

export const QUERY_SINGLE_COMMENT = gql`
  query getSingleComment($commentId: ID!) {
    comment(commenttId: $commentId) {
      _id
      commentText
      commentAuthor
      createdAt
      thoughtId
    }
  }
`;
