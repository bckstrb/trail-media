import { gql } from '@apollo/client';

export const QUERY_PROFILES = gql`
  query allProfiles {
    profiles {
      _id
      name
      email
      posts {
        _id
        postText
        createdAt
      }
    }
  }
`;

export const QUERY_SINGLE_PROFILE = gql`
query singleProfile($_id: ID!) {
  profile(_id: $_id) {
    _id
    name
    email
    posts {
      _id
      postText
      createdAt
    }
  }
}
`;


export const QUERY_POSTS = gql`
  query getPosts {
    posts {
      _id
      postText
      postAuthor
      createdAt
    }
  }
`;

export const QUERY_SINGLE_POSTS = gql`
  query singlePost($postId: ID!) {
    post(postId: $postId) {
      _id
      postText
      postAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;
