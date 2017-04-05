import React, { Component } from 'react'

module.exports = class YouTubeDebugger extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			"errors": [], 
			"settings": { 
				"bitrate": 8, 
				"video": { 
					"resolution": "1080p" 
				}
			}, 
			"user": null
		};	
		this.handleBitrate = this.handleBitrate.bind(this);
		this.handleResolution = this.handleResolution.bind(this);
	}

	handleBitrate() {
		this.setState({
			"settings": Object.assign({}, this.state.settings, {
				"bitrate": 12
			}),
		});
	}

	handleResolution() {
		this.setState({
			"settings": Object.assign({}, this.state.settings, {"video": {"resolution":'720p'}
			}),
		});
	}
	
	render() {
		return (
			<div>
        <button className="bitrate" onClick={this.handleBitrate}>Bitrate</button>
        <button className="resolution" onClick={this.handleResolution}>Resolution</button>
    	</div>
		);
	}
}