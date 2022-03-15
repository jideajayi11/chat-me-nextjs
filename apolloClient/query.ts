import { gql } from '@apollo/client';

export const getUsers = gql`
  query GetUsers($email: String) {
    users(email: $email) {
      id
      name
      email
    }
  }
`;

export const createUser = gql`
  mutation CreateUser($name: String!, $email: String!) {
    createUser(name: $name, email: $email) {
      id
      name
      email
    }
  }
`;
