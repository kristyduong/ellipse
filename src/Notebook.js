import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Linkblock from './Link.js';
import './Linkblock.css';
import Rows from './util.js'

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
		return (
			<Router>
				<div>
			    <Route path="/notebook/links" component={LinkList} />
    			<Route path="/notebook/quotes" component={QuoteList} />
    			<Route path="/notebook/exercises" component={Exercises} />
    			<Route path="/notebook/projects" component={Projects} />
				<LinkList />
				</div>
			</Router>
		)
	}
}

class LinkList extends Component {
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
			  	    	<div className="link-container">{renderlinks.map(link => <Linkblock key={link.id} link={link} />)}</div>
			  	    </div>
		  	    )
      		}}
      	</Query>
    );
  }
}

class QuoteList extends Component {
	render() {
    	return(
    		<p>QuoteList</p>
    	);
	}
}

class Exercises extends Component {
	render() {
    	return(
    		<p>Exercises</p>
    	);
	}
}

class Projects extends Component {
	render() {
    	return(
    		<p>Projects</p>
    	);
	}
}

export default Notebook