import React, { Component } from 'react';

class YouTubeDebugger extends Component {
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
    this.bitrateHandler = this.bitrateHandler.bind(this);
    this.resolutionHandler = this.resolutionHandler.bind(this);
  }

  bitrateHandler() {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        bitrate: 12,
      })
    });
  }

  resolutionHandler() {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        video: {
          resolution: '720p',
        }
      })
    })
  }

  render() {
    return (
      <div>
        <button className='bitrate' onClick={this.bitrateHandler} />
        <button className='resolution' onClick={this.resolutionHandler} />
      </div>
    )
  }
}

module.exports = YouTubeDebugger
