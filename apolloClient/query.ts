import { gql } from '@apollo/client';

export const getUsers = gql`
  query Query($email: String) {
    users(email: $email) {
      id
      name
      email
    }
  }
`;
