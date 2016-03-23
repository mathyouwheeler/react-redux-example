import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import * as actions from '../actionCreators'
import Counter from '../components/Counter'
import CounterHistory from '../components/CounterHistory'
import style from './css/Home.css'

class DashboardCounter extends Component {

  render () {
    return (
      <section className={style.section}>
        <div>
          <h1>
            <p>Counter Dashboard</p>
          </h1>
          <Counter count={this.props.count} increment={this.props.increment} />
          <CounterHistory countEntries={this.props.countEntries} />
        </div>
      </section>
    )
  }
}

DashboardCounter.propTypes = {
  count: PropTypes.number.isRequired,
  countEntries: PropTypes.array.isRequired,
  increment: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  count: state.countDashboard.count,
  countEntries: state.countDashboard.countEntries
})

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(actions.setCount())
})

export default connect(mapStateToProps, mapDispatchToProps)(DashboardCounter)
