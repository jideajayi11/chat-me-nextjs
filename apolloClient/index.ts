import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.API_URL,
  cache: new InMemoryCache(),
});

export {
  ApolloProvider,
  client,
};
