import React from 'react'
import {connect} from 'react-redux'

import SearchBox from '../components/SearchBox'

function SearchBoxContainer(props) {
  return <SearchBox {...props} />
}

function mapStateToProps(state) {
  const {dogs} = state
  return {dogs}
}

export default connect(mapStateToProps)(SearchBoxContainer)
