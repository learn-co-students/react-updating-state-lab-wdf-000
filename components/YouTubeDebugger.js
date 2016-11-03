const React = require('react');

class YouTubeDebugger extends React.Component {
  constructor() {
    super();

    this.state = {
      errors: [], 
      settings: { bitrate: 8, video: { resolution: '1080p' } }, 
      user: null 
    }

    this.handleClickForBitrate = this.handleClickForBitrate.bind(this);
    this.handleClickForResolution = this.handleClickForResolution.bind(this);
  }

  handleClickForBitrate() {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        bitrate: 12,
      }),
    })
    console.log(this.state.settings.bitrate)
  }

  handleClickForResolution() {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        video: Object.assign({}, this.state.video, {
          resolution: "720p",
        }),
      }),
    })
    console.log(this.state.settings.video.resolution)
  }

  render()  {
    return (
      <div>
        <button className="bitrate" onClick={this.handleClickForBitrate}>.bitrate</button>
        <button className="resolution" onClick={this.handleClickForResolution}>.resolution</button>
      </div>
    )
  }
}

module.exports = YouTubeDebugger;
