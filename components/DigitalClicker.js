import React from 'react';


class DigitalClicker extends React.Component {
  constructor() {
    super()
    this.state = {
      timesClicked: 0
    }
    this.click = this.click.bind(this);
  }
  click() {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    })
  }
  render() {
    return (
      <button onClick={this.click}>{this.state.timesClicked}</button>
    )
  }
}




module.exports = DigitalClicker;
