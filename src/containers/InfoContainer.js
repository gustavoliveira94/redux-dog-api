import React from 'react'
import {connect} from 'react-redux'

import Info from '../components/Info'

function InfoContainer(props) {
  return <Info {...props} />
}

function mapStateToProps(state) {
  const {dogs} = state
  return {dogs}
}

export default connect(mapStateToProps)(InfoContainer)
