import { ApolloClient, InMemoryCache } from '@apollo/client';
import getConfig from 'next/config';

const env = getConfig().publicRuntimeConfig;

const client = new ApolloClient({
  uri: `${env.GQL_URL}`,
  cache: new InMemoryCache(),
});

export default client;
