import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {Link, Route, Redirect} from 'react-router-dom';
import Switch from 'react-router-dom/Switch';
import Slider from 'react-slick';

import youtubeVideoService from './youtubeVideoService';

youtubeVideoService.request();

const HeaderLink = ( {text, route} ) => {
  return (
    <div className="header-link">
      <Link to={route}><span>{text}</span></Link>
    </div>
  )
}

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <p>
          Yar Pirate Ipsum
        </p>
        <p>
          Jack grog blossom heave to American Main Yellow Jack topsail spike overhaul chase. Broadside galleon hardtack pirate hands pink brig pressgang rutters. Coxswain hardtack Sea Legs come about warp topgallant Davy Jones' Locker pinnace marooned.
        </p>
        <p>
          Stern Cat o'nine tails landlubber or just lubber quarter belaying pin hail-shot grog blossom yo-ho-ho trysail. Dance the hempen jig fire in the hole matey fore barque deadlights schooner no prey, no pay loot. Chase draft gun pillage walk the plank hail-shot boom mizzenmast lass.
        </p>
      </div>
    )
  }
}

class Music extends Component {
  render() {
    return (
      <div>Music</div>
    )
  }
}

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

class Shows extends Component {
  render() {
    return (
      <div>
        <span>
          Shows
        </span>
      </div>
    )
  }
}
class Album extends Component {
  render() {
    return (
      <div>
        <h2>Mighty Tree</h2>
        <p>
          Let us wax poetic about the beauty of the cheeseburger. The flavour gracefully dances across your palate like a majestic figure skater on ice.
        </p>
        <p>
          The cheese melts on the burger and in your mouth, perfectly complementing the medium-rare beef. Any burger lover worth their salt knows the best patty is comprised of ground chuck and brisket.
        </p>
        <p>
          Whether you’re a ketchup and mustard loyalist or you prefer house sauce to no sauce, you can agree that every cheeseburger has it’s own special flair. Top tip: house sauce begs to be ordered on the side for fry-dipping purposes.
        </p>
      </div>
    )
  }
}

class Video extends Component {
  render() {
    return (
      <YouTubeSlider />
    )
  }
}

class YouTubeSlider extends Component {
  constructor() {
    super();
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
        <div>
          <YouTubeVideo video="Nmr5qejhPf0" autoplay="0" rel="0" modest="1"/>
        </div>
        <div>
          <YouTubeVideo video="5d0c6dSXV0c" autoplay="0" rel="0" modest="1"/>
        </div>
        <div>
          <YouTubeVideo video="u4v-oPgylCc" autoplay="0" rel="0" modest="1"/>
        </div>
        <div>
          <YouTubeVideo video="a8W0jR0M9tw" autoplay="0" rel="0" modest="1"/>
        </div>
      </Slider>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <div className="andy-lyle-hall"><span>Andy Lyle Hall</span></div>
        <div className="header-link-container">
          <HeaderLink text={"Home"} route={"/"} />
          <HeaderLink text={"Album"} route={"/album"} />
          <HeaderLink text={"Music"} route={"/music"} />
          <HeaderLink text={"Video"} route={"/video"} />
          <HeaderLink text={"Shows"} route={"/shows"} />
        </div>
        </header>
        <div className="body-container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/music" component={Music} />
            <Route path="/album" component={Album} />
            <Route path="/video" component={Video} />
            <Route path="/shows" component={Shows} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App;
