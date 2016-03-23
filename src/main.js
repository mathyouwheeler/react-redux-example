import 'babel-polyfill'
import 'normalize.css'
import './css/globals.css'
import React from 'react'
import ReactDOM from 'react-dom'
import {Router, browserHistory as history} from 'react-router'
import attachFastClick from 'fastclick'
import routes from './routes'
// react-redux imports
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import { colorDashboard } from './reducers/colorReducer.js'
import { countDashboard } from './reducers/countReducer.js'

// Remove 300ms tap delay on mobile devices
attachFastClick.attach(document.body)

// Expose globally
window.React = React

// Set up redux store, and with redux dev tools extension support
const reducer = combineReducers({ colorDashboard, countDashboard })
const store = (
  window.devToolsExtension
  ? window.devToolsExtension()(createStore)
  : createStore)(reducer)

ReactDOM.render(
  <Provider store={store}>
    <Router
      children={routes}
      history={history}
    />
  </Provider>,
  document.getElementById('root')
)
