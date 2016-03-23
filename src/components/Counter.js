import React, {PropTypes, Component} from 'react'
import style from './css/Counter.css'

export default class Counter extends Component {

  constructor () {
    super()
    this.increment = this.increment.bind(this)
    this.state = {
      counter: 0
    }
  }

  increment () {
    this.setState({
      counter: this.state.counter += 1
    })
  }

  render () {
    const count = this.state.counter

    return (
      <div className={style.counter}>
        <h1>Count: {count}</h1>
        <p>Click the button to increment the counter</p>
        <button className={style.button} onClick={this.increment}>
          Increment
        </button>
      </div>
    )
  }
}

Counter.propTypes = {
  increment: PropTypes.func.isRequired
}
