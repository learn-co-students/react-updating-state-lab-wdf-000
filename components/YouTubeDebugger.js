import React from 'react';


class YouTubeDebugger extends React.Component {
  constructor() {
    super()
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
    this.bit = this.bit.bind(this);
    this.res = this.res.bind(this);
  }

  bit() {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        bitrate: 12
      }),
    });
  }

  res() {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        video: Object.assign({}, this.state.settings.video, {
          resolution: '720p'
        })
      })
    })
  }

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.bit}></button>
        <button className="resolution" onClick={this.res}></button>
      </div>
    )
  }
}



module.exports = YouTubeDebugger;
