import React from 'react';

class YouTubeDebugger extends React.Component {
  constructor(){
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

    this.changeState = this.changeState.bind(this);
    this.changeResolution = this.changeResolution.bind(this);

  }

  changeState() {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        bitrate: 12
      }),
    });
  }

    changeResolution() {
      this.setState({
        settings: Object.assign({}, this.state.settings, {
          video: Object.assign({}, this.state.settings.video, {
            resolution: '720p'
          })
        }),
      })
  }

  render() {
    return (
      <div>
        <button className='bitrate' onClick={this.changeState}>Change B</button>
        <button className='resolution' onClick={this.changeResolution}>Change R</button>
      </div>
    )
  }
}


module.exports = YouTubeDebugger;
