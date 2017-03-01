import React from 'react';


class YouTubeDebugger extends React.Component {
  constructor() {
    super()
    this.bit = this.bit.bind(this);
    this.res = this.res.bind(this);
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

  bit() {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        bitrate: 12
      })
    })
  }

  res() {

  }

  render() {
    return (
      <div>
        <button class="bitrate" onClick={this.bit}></button>
        <button class="resolution" onClick={this.res}></button>
      </div>
    )
  }
}



module.exports = YouTubeDebugger;
