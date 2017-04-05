import React from 'react';

class YouTubeDebugger extends React.Component {
  constructor(){
    super()

    this.handleClickForBit = this.handleClickForBit.bind(this)
    this.handleClickForRes = this.handleClickForRes.bind(this)



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

  handleClickForBit(event){
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        bitrate: 12
      })


    })
  }


  handleClickForRes(event){
    this.setState({
      settings: Object.assign({}, this.state.settings, {video: {resolution: '720p'}})
    })
  }



  render(){
    return(
        <div>
        <button className='bitrate' onClick={this.handleClickForBit}>Bitrate</button>
        <button className='resolution' onClick={this.handleClickForRes}>Resolution</button>
        </div>
    )
  }
}


module.exports = YouTubeDebugger;
