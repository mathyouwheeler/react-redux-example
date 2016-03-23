import 'babel-polyfill'
import 'normalize.css'
import './css/globals.css'
import React from 'react'
import ReactDOM from 'react-dom'
import {Router, browserHistory as history} from 'react-router'
import attachFastClick from 'fastclick'
import routes from './routes'
// react-redux imports
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { dashboards } from './reducers.js'

// Remove 300ms tap delay on mobile devices
attachFastClick.attach(document.body)

// Expose globally
window.React = React

// Set up redux store
const store = createStore(dashboards)

ReactDOM.render(
  <Provider store={store}>
    <Router
      children={routes}
      history={history}
    />
  </Provider>,
  document.getElementById('root')
)
