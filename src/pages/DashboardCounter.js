import React, {Component} from 'react'
import moment from 'moment'
import Counter from '../components/Counter'
import CounterHistory from '../components/CounterHistory'
import style from './css/Home.css'

export default class DashboardCounter extends Component {
  constructor () {
    super()
    this.increment = this.increment.bind(this)
    this.state = {
      counter: 0,
      countEntries: []
    }
  }

  increment () {
    const newCount = this.state.counter + 1
    this.setState({
      counter: newCount,
      countEntries: [ ...this.state.countEntries, { timeStamp: moment(), count: newCount } ]
    })
  }

  render () {
    return (
      <section className={style.section}>
        <div>
          <h1>
            <p>Counter Dashboard</p>
          </h1>
          <Counter counter={this.state.counter} increment={this.increment} />
          <CounterHistory countEntries={this.state.countEntries} />
        </div>
      </section>
    )
  }
}
