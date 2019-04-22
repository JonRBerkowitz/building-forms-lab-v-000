// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  this.state = {
    text: ''
  }

  render() {
    return(
      <div>
        Band Input
        <form>
          <input type="text" />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default BandInput
