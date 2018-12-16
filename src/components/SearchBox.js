import React from 'react'
import {Button, Input, FormGroup, Label} from 'reactstrap'

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
        <FormGroup>
          <Label for="name">
            Find a random dog image from a breed, e.g. hound
          </Label>
          <Input
            id="name"
            type="text"
            name="name"
            value={this.state.name}
            placeholder="Example: Rottweiler"
            onChange={this.handleChange}
          />
        </FormGroup>
        <Button color="primary" onClick={this.handleSubmit}>
          Find Doggy!
        </Button>
      </React.Fragment>
    )
  }
}

export default SearchBox
