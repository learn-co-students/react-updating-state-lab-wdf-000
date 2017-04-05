import React from 'react'

class DigitalClicker extends React.Component {
  constructor() {
    super();

    this.state = {
      timesClicked: 0,
    };

    this.addClick = this.addClick.bind(this);

  }

  addClick() {
    this.setState({
      timesClicked: ++this.state.timesClicked,
    });
  }

  render() {
    return (
      <div>
        <button onClick={ this.addClick }>{this.state.timesClicked}</button>
      </div>
    )
  }
}

module.exports = DigitalClicker;
