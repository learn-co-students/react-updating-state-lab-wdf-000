import React from 'react';


class DigitalClicker extends React.Component {
  constructor() {
    super()

    this.state = {
      timesClicked: 0
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({
      timesClicked: ++this.state.timesClicked}, () => console.log("clickityclicking"))
  }

    render() {
      return (
        <button onClick={this.handleClick}>DigitalClicker {this.state.timesClicked}</button>
      );
    }


}


module.exports = DigitalClicker
