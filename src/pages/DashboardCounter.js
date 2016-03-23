import React, {Component} from 'react'
import moment from 'moment'
import Counter from '../components/Counter'
import CounterHistory from '../components/CounterHistory'
import style from './css/Home.css'

export default class DashboardCounter extends Component {
  constructor () {
    super()
    this.state = {
      countEntries: []
    }
  }

  render () {
    return (
      <section className={style.section}>
        <div>
          <h1>
            <p>Counter Dashboard</p>
          </h1>
          <Counter />
          <CounterHistory countEntries={this.state.countEntries} />
        </div>
      </section>
    )
  }
}
