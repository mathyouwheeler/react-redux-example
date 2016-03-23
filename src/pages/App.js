import React, {Component, PropTypes} from 'react'
import Header from '../components/Header'
import moment from 'moment'

export default class App extends Component {

  constructor () {
    super()
    this.increment = this.increment.bind(this)
    this.setColor = this.setColor.bind(this)
    this.state = {
      color: '#000',
      colorEntries: [],
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

  setColor (newColor) {
    this.setState({
      color: newColor.hex,
      colorEntries: [ ...this.state.colorEntries, { timeStamp: moment(), color: newColor.hex } ]
    })
  }

  render () {
    return (
      <div>
        <Header />
        {this.props.children && React.cloneElement(this.props.children, {
          setColor: this.setColor,
          color: this.state.color,
          colorEntries: this.state.colorEntries,
          increment: this.increment,
          counter: this.state.counter,
          countEntries: this.state.countEntries
        })}
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
}
