import React from 'react';
import ReactDOM from 'react-dom';
import { Video } from './video';
import { Menu } from './menu';

const VIDEOS = {
  a: 'http://techslides.com/demos/sample-videos/small.mp4',
  b: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4',
  c: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4',
  d: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4',
  e: './mov_bbb.mp4'
};

class App extends React.Component {

  chooseVideo(newVideo) {

    console.log('New Video:', newVideo);
    console.log('chooseVideo this.state', this.state);

    this.setState({ src: VIDEOS[newVideo]});

  }

  constructor(props) {
    super(props);

    this.chooseVideo = this.chooseVideo.bind(this);

    this.state = { src: VIDEOS.a };

  }

  render() {
    return (
      <div>
        <h1>Video Player</h1>
        <Menu chooseVideo={this.chooseVideo} />
        <Video src={this.state.src} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
