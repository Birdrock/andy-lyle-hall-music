import React, { Component } from 'react';

import Slider from 'react-slick';

import YouTubeVideo from "./YouTubeVideo";
import youtubeVideoService from './youtubeVideoService';

class YouTubeSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: []
    }
  }
  
  componentDidMount() {
    youtubeVideoService.request()
    .then(videos => {
      this.setState({
        videos: videos
      })
    })
    .catch((e) => {
      console.warn(`Error loading videos: ${e}`);
    })
  }
  
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        {this.state.videos.map(video => {
          return (
            <div key={video}>
              <YouTubeVideo video={video} autoplay="0" rel="0" modest="1"/>
            </div>
            )
        })}
      </Slider>
    );
  }
}

export default YouTubeSlider