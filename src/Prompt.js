import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import './Prompt.css'
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const promptquery = gql`
{
  prompts(rand: true) {
    id
    title
    text
  }
}
`;

const submitWriting = `

`;

class Prompt extends Component {
    state = {
      value: ''
    }

    handleInputChange(event) {
      this.setState({
        value: event.target.value
      })
    }

    resetValue() {
      this.setState({
        value: ''
      })
    }

// value={this.state.value}
// onChange={this.handleInputChange.bind(this)}

  	render() {
    	return(
        <Query query={promptquery}>
          {({ loading, error, data }) => {
            if (loading) return <div>Fetching</div>
            if (error) return <div>Error</div>

            const renderprompt = data.prompts[0]

            return(
      		    <form className="activity-container">
                <h4>{renderprompt.title}</h4>
                <p>{renderprompt.text}</p>
      			   <TextField 
      				    id="response-text"
      				    multiline
      				    fullWidth
                  required
      			   />
      			   <button>Submit</button>
      		    </form>
            )
          }}
        </Query>
    	);
  	}
}

export default Prompt