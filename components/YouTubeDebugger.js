import React from 'react';
import ReactDOM from 'react-dom';

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
    this.bitHandler = this.bitHandler.bind(this);
    this.rezHandler = this.rezHandler.bind(this);
  }
  bitHandler() {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        bitrate: 12,
      })
    });
  }
  rezHandler() {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        video: {
          resolution: '720p'
        }
      })
    });
  }
  render() {
    return (
      <div>
        <button className='bitrate' onClick={this.bitHandler} />
        <button className='resolution' onClick={this.rezHandler} />
      </div>
    )
  }
}

module.exports = YouTubeDebugger;
