const React = require('react');

class YouTubeDebugger extends React.Component {
  constructor(){
    super();

    this.bitrateHandler = this.bitrateHandler.bind(this);
    this.resolutionHandler = this.resolutionHandler.bind(this);

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
  }
  bitrateHandler(){
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        bitrate: 12
      })
    });
  }

  resolutionHandler(){
    let currentBitrate = this.state.settings.bitrate;
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        bitrate: currentBitrate,
        video: {
          resolution: '720p'
        }
      })
    });
  }

  render(){
    return (
      <div>
      <button className = "bitrate" onClick={this.bitrateHandler}>Change bitrate (only once)</button>
      <button className = "resolution" onClick={this.resolutionHandler}>Change resolution (only once)</button>
      </div>
    )
  }
}

module.exports = YouTubeDebugger;
