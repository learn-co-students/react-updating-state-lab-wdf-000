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
  
    this.handleChangeBitrate = this.handleChangeBitrate.bind(this);
    this.handleChangeResolution = this.handleChangeResolution.bind(this);
  }

  handleChangeBitrate() {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        bitrate: 12
      }),
    });
  }
  handleChangeResolution() {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        video: {
          resolution: '720p'
        }
      })
    });
  }
  render() {
    return(
    <div>
      <button className="bitrate" onClick={this.handleChangeBitrate}>Change bitrate</button> <p>Bitrate: {this.state.settings.bitrate}</p>
      <button className="resolution" onClick={this.handleChangeResolution}>Change resolution</button> <p>Resolution: {this.state.settings.video.resolution}</p>
    </div>  
    );
  }
}

module.exports = YouTubeDebugger;
