import gql from "graphql-tag";

export const FETCH_POSTS_QUERY = gql`
  {
    getPosts {
      id
      body
      createdAt
      username
      likesCount
      likes {
        username
      }
      commentsCount
      comments {
        id
        username
        createdAt
        body
      }
    }
  }
`;

export const CREATE_POST_MUTATION = gql`
  mutation createPost($body: String!) {
    createPost(body: $body) {
      id
      body
      createdAt
      username
      likes {
        id
        username
        createdAt
      }
      comments {
        id
        body
        username
        createdAt
      }
    }
  }
`;

export const EDIT_POST_MUTATION = gql`
  mutation ($postId: ID!, $body: String!) {
    editPost(postId: $postId, body: $body) {
      id
      body
      createdAt
      username
      comments {
        id
        username
        body
      }
      likes {
        id
        username
        createdAt
      }
    }
  }
`;
