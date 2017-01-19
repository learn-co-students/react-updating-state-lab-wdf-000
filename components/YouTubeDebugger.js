const React = require('react');

class YouTubeDebugger extends React.Component {
  constructor() {
    super();

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }

    this.updateBit = this.updateBit.bind(this);
    this.updateRes = this.updateRes.bind(this);
  }

  updateBit() {
    this.setState({
      errors: [],
      user: null,
      settings: Object.assign({}, this.state.settings, {
        bitrate: 12,
      })
    });
  }

  updateRes(){
    this.setState({
      errors: [],
      user: null,
      settings: Object.assign({}, this.state.settings, {
        video: {
          resolution: '720p',
        }
      })
    });
  }

  render() {
    return(
      <div>
        <button className="bitrate" onClick={this.updateBit}>Bitrate</button><br />
        <button className="resolution" onClick={this.updateRes}>Resolution</button>

      </div>

      );
  }
}

module.exports = YouTubeDebugger;