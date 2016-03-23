import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import * as actions from '../actionCreators'
import Color from '../components/Color'
import ColorHistory from '../components/ColorHistory'
import style from './css/Home.css'

class DashboardColor extends Component {

  render () {
    return (
      <section className={style.section}>
        <div>
          <h1>
            <p>Color Dashboard</p>
          </h1>
          <Color color={this.props.color} setColor={this.props.setColor} />
          <ColorHistory colorEntries={this.props.colorEntries} />
        </div>
      </section>
    )
  }
}

DashboardColor.propTypes = {
  color: PropTypes.string.isRequired,
  colorEntries: PropTypes.array.isRequired,
  setColor: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  color: state.colorDashboard.color,
  colorEntries: state.colorDashboard.colorEntries
})

const mapDispatchToProps = (dispatch) => ({
  setColor: (color) => dispatch(actions.setColor(color))
})

export default connect(mapStateToProps, mapDispatchToProps)(DashboardColor)
