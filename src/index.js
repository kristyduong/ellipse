import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const httpLink = createHttpLink({
  uri: 'http://localhost:8000/graphql/',
  credentials: 'same-origin'
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

// client.query({
//   query: gql`
//     {
//         links {
//         	id
//           	url
// 	        description
//         }
//     }
//   `
// }).then(response => console.log(response.data.links));

ReactDOM.render(  
	<ApolloProvider client={client}>
    	<App />
  	</ApolloProvider>, 
  	document.getElementById('root'));
registerServiceWorker();
