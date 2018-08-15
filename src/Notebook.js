import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Linkblock from './Link.js';

const linkquery = gql`
{
  links {
    id
    url
    description
  }
}
`;

class Notebook extends Component {
  render() {
    return(
    	<Query query={linkquery}>
      		{({ loading, error, data }) => {
      			if (loading) return <div>Fetching</div>
      			if (error) return <div>Error</div>

        		const renderlinks = data.links

		        return (
			    	<div>
			  	    	<p className="main"></p>
			  	    	<div>{renderlinks.map(link => <Linkblock key={link.id} link={link} />)}</div>
			  	    </div>
		  	    )
      		}}
      	</Query>
    );
  }
}

export default Notebook