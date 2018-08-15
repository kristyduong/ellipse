import React, { Component } from 'react'
import './Linkblock.css'

class Linkblock extends Component {
  render() {
    return (
      <div>
        <div className="linkblock">
          <div className="text"> {this.props.link.description} ({this.props.link.url}) </div>
        </div>
      </div>
    )
  }
}

export default Linkblock