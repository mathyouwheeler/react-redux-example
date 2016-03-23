import React, {Component} from 'react'
import { Link } from 'react-router'
import style from './css/Home.css'

export default class Home extends Component {

  render () {
    return (
      <section className={style.section}>
        <div>
          <h1>
            <p>react-redux-talk</p>
          </h1>
          <h3><Link to='/counter'>Counter Dashboard (very important)</Link></h3>
          <h3><Link to='/color'>Color Dashboard</Link></h3>
        </div>
      </section>
    )
  }
}
