import React, {PropTypes, Component} from 'react'
import style from './css/Counter.css'

export default class Counter extends Component {

  render () {
    const count = this.props.count

    return (
      <div className={style.counter}>
        <h1>Count: {count}</h1>
        <p>Click the button to increment the counter</p>
        <button className={style.button} onClick={this.props.increment}>
          Increment
        </button>
      </div>
    )
  }
}

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired
}
