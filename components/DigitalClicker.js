const React = require('react');

class DigitalClicker extends React.Component {
  constructor() {
    super();

    this.state = {
      timesClicked: 0,
    }

    this.counter = this.counter.bind(this);

  }

  counter() {
    this.setState({
      timesClicked: this.state.timesClicked+1,
    });
  }

  render() {
    return(
      <div>
        <button onClick={this.counter}>{this.state.timesClicked}</button>
      </div>

      );
  }
}

module.exports = DigitalClicker;