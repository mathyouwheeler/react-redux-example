import React, {Component} from 'react'
import { Link } from 'react-router'
import style from '../pages/css/Home.css'

export default class Header extends Component {

  render () {
    return (
      <header className={style.section}>
        <div>
          <Link to='/'>Home</Link> |&nbsp;
          <Link to='/counter'>Counter Dashboard (very important)</Link> |&nbsp;
          <Link to='/color'>Color Dashboard</Link>
        </div>
      </header>
    )
  }
}
