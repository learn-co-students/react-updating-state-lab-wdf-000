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
          resolution: '1080p',
          isFullScreen: false
        }
      }
    }

    this.setBitrate = this.setBitrate.bind(this)
    this.setResolution = this.setResolution.bind(this)
  }

  setBitrate() {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        bitrate: 12
      })
    })
  }

  setResolution() {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        video: Object.assign({}, this.state.settings.video, {
          resolution: '720p'
        }
        })
      })
    })
  }

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.setBitrate}>{this.state.timesClicked}</button>
        <button className="resolution" onClick={this.setResolution}>{this.state.timesClicked}</button>
      </div>
    )
  }
}

module.exports = YouTubeDebugger;