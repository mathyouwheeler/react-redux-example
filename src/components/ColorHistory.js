import React, {PropTypes, Component} from 'react'
import style from './css/Counter.css'

export default class ColorHistory extends Component {

  constructor () {
    super()
    this.renderHistoryList = this.renderHistoryList.bind(this)
  }

  renderHistoryList () {
    const colorEntries = this.props.colorEntries
    const colorList = colorEntries.map((entry) => (
      <li key={`color-${entry.color}-${entry.timeStamp.format('x')}`}>
        <strong>Color: </strong>
        <span style={{ color: `#${entry.color}` }}>#{entry.color}</span> ----------
        <strong>Timestamp:</strong> {entry.timeStamp.format('MMMM DD, YYYY, h:mm:ss a')}
      </li>
    ))

    if (colorEntries.length > 0) {
      return <ul>{colorList}</ul>
    }
    return <img src='http://www.quickmeme.com/img/bc/bca40712a490c26235d29c9d5260043c9b8fa542fe2c8d8b5a338cf9068bf68e.jpg' />
  }

  render () {
    return (
      <div className={style.counter}>
        <h1>Color History</h1>
        <p>Just to be clear, you should see a history of the colors below.</p>
        {this.renderHistoryList()}
      </div>
    )
  }
}

ColorHistory.propTypes = {
  colorEntries: PropTypes.array.isRequired
}
