import React, { Component } from 'react';

class YouTubeVideo extends Component {
    render() {
      var videoSrc = "https://www.youtube.com/embed/" + 
          this.props.video + "?autoplay=" + 
          this.props.autoplay + "&rel=" + 
          this.props.rel + "&modestbranding=" +
          this.props.modest;
      return (
        <div className="youtube-container">
          <iframe title={this.props.video} className="youtube-player" type="text/html" width="100%" height="100%" src={videoSrc} frameBorder="0"/>
        </div>
      );
    }
  }

export default YouTubeVideo