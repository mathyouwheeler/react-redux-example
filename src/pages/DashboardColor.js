import React, {Component, PropTypes} from 'react'
import Color from '../components/Color'
import ColorHistory from '../components/ColorHistory'
import style from './css/Home.css'

export default class DashboardColor extends Component {

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
  color: PropTypes.string,
  colorEntries: PropTypes.array,
  setColor: PropTypes.func
}
