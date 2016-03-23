import React, {Component} from 'react'
import moment from 'moment'
import Color from '../components/Color'
import ColorHistory from '../components/ColorHistory'
import style from './css/Home.css'

export default class DashboardColor extends Component {
  constructor () {
    super()
    this.state = {
      colorEntries: []
    }
  }

  render () {
    return (
      <section className={style.section}>
        <div>
          <h1>
            <p>Color Dashboard</p>
          </h1>
          <Color />
          <ColorHistory colorEntries={this.state.colorEntries} />
        </div>
      </section>
    )
  }
}
