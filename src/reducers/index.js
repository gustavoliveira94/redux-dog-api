import {combineReducers} from 'redux'

import {REQUEST_DOG, FETCHING_DATA} from '../actions'

const initialState = {
  loading: false,
  data: ''
}

const dogs = (state = initialState, action) => {
  const {type, payload} = action

  switch (type) {
    case FETCHING_DATA:
      return {
        ...state,
        loading: true
      }
    case REQUEST_DOG:
      return {
        ...state,
        loading: false,
        data: payload
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  dogs
})

export default rootReducer
