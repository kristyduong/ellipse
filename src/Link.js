import React, { Component } from 'react'
import './Linkblock.css'

class Linkblock extends Component {
  render() {
    return (
      <div>
        <div className="linkblock">
          {this.props.link.description} ({this.props.link.url})
        </div>
      </div>
    )
  }
}

export default Linkblock