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
          resolution: 100
        }
      }
    };

    this.bitrate = this.bitrate.bind(this);
    this.resolution = this.resolution.bind(this);
  }


  bitrate(e) {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        bitrate: ++this.state.settings.bitrate
          })
      }, () => {
        const variable = this.state.settings.bitrate;
         console.log(`${variable}`)
       }
      )
    }

    resolution() {
      this.setState({
        settings: Object.assign({}, this.state.settings, {
          video: Object.assign({}, this.state.settings.video, {
            resolution: ++this.state.settings.video.resolution
          })
        })
      }, () => {
        const resolution = this.state.settings.video.resolution;
        console.log(`Resolution is now ${resolution}`)
      })
   }


    render() {
      return (
        <div>
          <button className='bitrate' onClick={this.bitrate}>Bitrate Button</button>
          <button className='resolution' onClick={this.resolution}>Resolution Button</button>
        </div>
      );
    }


}


module.exports = YouTubeDebugger
