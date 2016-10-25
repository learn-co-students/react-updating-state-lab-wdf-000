const React = require('react')

class DigitalClicker extends React.Component {
  constructor() {
  super();

  this.handleClick = this.handleClick.bind(this)
  this.state = {
    timesClicked: 0
    }
  }
  
  handleClick() {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    })
  }

  render() {
    return(
      <button onClick={this.handleClick}>{this.state.timesClicked}</button>
    )
  }
}

module.exports = DigitalClicker
