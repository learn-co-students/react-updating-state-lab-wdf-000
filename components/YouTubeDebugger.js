const React = require('react')

class YouTubeDebugger extends React.Component{
  constructor(){
    super();
    this.changeRes = this.changeRes.bind(this);
    this.changeBit = this.changeBit.bind(this);
    this.state = {
      errors:[],
      user: null,
      settings:{
        bitrate: 8,
        video:{
          resolution: '1080p'
        }
      }
    }

  }

  changeRes(){
    this.setState({
      settings: Object.assign({},this.state.settings,{
        video:{
          resolution:'720p',
        }
      }),
    })
  }

  changeBit(){
    this.setState({
      settings: Object.assign({},this.state.settings,{
        bitrate: 12,
      }),
    })
  }

  render(){
    return(
      <div>
      <button className="resolution" onClick={this.changeRes}>{this.state.settings.video.resolution}</button>
      <button className="bitrate" onClick={this.changeBit}>{this.state.settings.bitrate}</button>
      </div>
    )
  }

}

module.exports = YouTubeDebugger
