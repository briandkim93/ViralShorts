import React, { Component } from 'react';
import './VideoListItem.css';

class VideoListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {videoViewCount: ''};
    this.getViewCount(this.props.video);
  }

  getViewCount(video) {
    async function fetchData() {
      let response = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${video.id.videoId}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`);
      let data = await response.json();
      return data;
    }
    fetchData().then((response => {
      const viewCount = parseInt(response.items[0].statistics.viewCount, 0);
      this.setState({videoViewCount: viewCount});
    }));
  }

  render() {
    if (!parseInt(this.state.videoViewCount, 0)) {
      return (
        <li className="video-list-item list-group-item px-2" />
      );
    }
    return (
      <li className="video-list-item list-group-item px-2" onClick={() => {this.props.onSelectVideo(this.props.video)}}>
        <div className="media">
          <img 
            className="mr-3"
            src={this.props.video.snippet.thumbnails.default.url}
            alt='Video Thumbnail' />
          <div className="media-body">
            <h4 className="video-title media-heading">{this.props.video.snippet.title}</h4>
            <h5 className="video-channel">{this.props.video.snippet.channelTitle}</h5>
            <h6 className="video-view-count">View Count: {this.state.videoViewCount.toLocaleString()}</h6>
          </div>
        </div>
      </li>
    );
  }
};

export default VideoListItem;