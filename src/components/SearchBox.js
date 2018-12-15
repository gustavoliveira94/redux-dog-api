import React from 'react'
import {requestDog} from '../actions'

class SearchBox extends React.Component {
  state = {
    name: ''
  }

  handleChange = event => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.dispatch(requestDog(this.state.name))
  }

  render() {
    return (
      <React.Fragment>
        Find:{' '}
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>Buscar</button>
      </React.Fragment>
    )
  }
}

export default SearchBox
