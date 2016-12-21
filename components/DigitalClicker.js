const React = require('react');

class DigitalClicker extends React.Component{
  constructor() {
    super();

    this.state = {
      timesClicked: 0
    };

    this.handleClick = this.handleClick.bind(this);
  }
    handleClick() {
      this.setState({
        addressInfo: Object.assign({}, this.state, {
          timesClicked: this.state.timesClicked += 1
        }),
      });
    }

  render() {
      //
      return(
        <button onClick={this.handleClick}>{this.state.timesClicked}</button>
      )
  }
}

module.exports = DigitalClicker
