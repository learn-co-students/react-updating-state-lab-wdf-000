import React, { Component, PropTypes } from 'react';

class DigitalClicker extends Component {

  constructor(props) {
    super(props);
    this.state = {
      timesClicked: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      timesClicked: ++this.state.timesClicked,
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.timesClicked}</button>
      </div>
    );
  }
}

module.exports = DigitalClicker;
