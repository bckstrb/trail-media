const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Profile {
    _id: ID
    name: String!
    email: String!
    password: String!
    posts: [Post]
  }

  type Post {
    _id: ID
    thoughtText: String!
    thoughtAuthor: String!
    createdAt: String
    comments: [Comment]!
  }

  type Comment {
    _id: ID
    commentText: String!
    commentAuthor: String!
    createdAt: String
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    profiles: [Profile]
    profile(_id: ID!): Profile
    posts(name: String): [Post]
    post(postId: ID!): Post
  }

  type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addPost(postText: String!, postAuthor: String!): Post
    addComment(
      postId: ID!
      commentText: String!
      commentAuthor: String!
    ): Post
    removePost(postId: ID!): Post
    removeComment(postId: ID!, commentId: ID!): Post
  }
`;

module.exports = typeDefs;
