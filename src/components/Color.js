import React, {PropTypes, Component} from 'react'
import ColorPicker from 'react-color'
import style from './css/Counter.css'

export default class Color extends Component {

  render () {
    const color = this.props.color

    return (
      <div className={style.color}>
        <h1>Color: <span style={{ color: `#${color}` }}>#{color}</span></h1>
        <p>Change the color!</p>
        <div style={{ textAlign: 'center' }}>
          <div style={{ display: 'inline-block' }}>
            <ColorPicker
              color={color}
              onChangeComplete={this.props.setColor}
              type='sketch'
            />
          </div>
        </div>
      </div>
    )
  }
}

Color.propTypes = {
  color: PropTypes.string.isRequired,
  setColor: PropTypes.func.isRequired
}
