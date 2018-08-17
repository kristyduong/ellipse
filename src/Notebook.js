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

var categories = ["Projects", "Exercises", "Quotes", "Links"];
var icons = ["fas fa-user", "fas fa-music", "fas fa-book", "fas fa-pencil-alt"];

class Notebook extends Component {
	render() {
		return (
			<Router basename={window.location.pathname}>
				<div>
          <Rows size="fa-lg" categories={categories} icons={icons} colnum={4}/>
			    <Route path="/links" component={LinkList} />
    			<Route path="/quotes" component={Quotes} />
    			<Route path="/exercises" component={Exercises} />
    			<Route path="/projects" component={Projects} />
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

class Quotes extends Component {
	render() {
    	return(
    		<p>Quotes</p>
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