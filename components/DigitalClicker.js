import React from 'react';
import ReactDOM from 'react-dom';

class DigitalClicker extends React.Component {
  constructor() {
    super();
    this.state = {
      timesClicked: 0
    }
    this.buttonClick = this.buttonClick.bind(this);
  }
  buttonClick() {
    var temp = this.state.timesClicked + 1;
    this.setState({
      timesClicked: temp
    });
  }
  render() {
    return (
      <button onClick={this.buttonClick}>{this.state.timesClicked}</button>
    );
  }
}

module.exports = DigitalClicker;

