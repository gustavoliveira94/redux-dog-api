import React from 'react'
import {render} from 'react-dom'
import {createStore, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import reducer from './reducers'
import App from './containers/App'

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

const middleware = [thunk]

const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        })
      : compose
    : ''

const enhancer = composeEnhancers(
  applyMiddleware(...middleware)
  // other store enhancers if any
)
const store = createStore(reducer, enhancer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
