import React, {Component, PropTypes} from 'react'
import Counter from '../components/Counter'
import CounterHistory from '../components/CounterHistory'
import style from './css/Home.css'

export default class DashboardCounter extends Component {

  render () {
    return (
      <section className={style.section}>
        <div>
          <h1>
            <p>Counter Dashboard</p>
          </h1>
          <Counter counter={this.props.counter} increment={this.props.increment} />
          <CounterHistory countEntries={this.props.countEntries} />
        </div>
      </section>
    )
  }
}

DashboardCounter.propTypes = {
  counter: PropTypes.number,
  countEntries: PropTypes.array,
  increment: PropTypes.func
}
