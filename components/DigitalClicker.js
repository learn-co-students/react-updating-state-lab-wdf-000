const React = require('react');

class DigitalClicker extends React.Component {
  constructor() {
    super();
    
    this.state = {
      timesClicked: 0
    }
    
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    });
  }

  render() {
    return (
      <div>
        <label>The button has been clicked {this.state.timesClicked} times.</label>
        <button onClick={this.handleClick} >{this.state.timesClicked}</button>
      </div>
    );
  }

}

module.exports = DigitalClicker;
