import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import './Prompt.css'

class Prompt extends Component {
  	render() {
    	return(
      		<form className="activity-container">
      			<p>“How was the test?” Evin asks.<br/>“No one died,” I reply.</p>
      			<TextField 
      				id="response-text"
      				multiline
      				fullWidth
      			/>
      			<button type="submit">Submit</button>
      			<button type="button">Clear</button>
      		</form>
    	);
  	}
}

export default Prompt