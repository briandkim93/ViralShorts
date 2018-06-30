import React, { Component } from 'react';
import './VideoList.css'

import VideoListItem from '../VideoListItem/VideoListItem';
import Pagination from '../Pagination/Pagination';

class VideoList extends Component {
  constructor(props) {
    super(props);

    this.state = {currentPage: 0};
  }

  removeActive() {
    const pageId = `page-${this.state.currentPage + 1}`;
    const pageElement = document.getElementById(pageId);
    if (pageElement) {
      pageElement.classList.remove('active');
    }
  }
  addActive() {
    const pageId = `page-${this.state.currentPage + 1}`;
    const pageElement = document.getElementById(pageId);
    if (pageElement) {
      pageElement.classList.add('active');
    }
  }
  selectPage(event) {
    this.removeActive();
    event.preventDefault();
    this.setState({currentPage: parseInt(event.target.textContent, 0) - 1});
  }
  previousPage(event) {
    event.preventDefault();
    if (this.state.currentPage > 0) {
      this.removeActive();
      this.setState({currentPage: this.state.currentPage - 1});
    }
  }
  nextPage(event) {
    event.preventDefault();
    if (this.state.currentPage < 9) {
      this.removeActive();
      this.setState({currentPage: this.state.currentPage + 1});
    }
  }

  render() {
    this.addActive();
    const videoListItems = this.props.viralShorts.map(video => {
      return (
        <VideoListItem 
          video={video} 
          key={video.id.videoId}
          onSelectVideo={this.props.onSelectVideo} />
      );
    });
    const videoListItemsLength = videoListItems.length;
    const segmentedVideoListItems = [];
    for (let i = 0; i < videoListItemsLength / 5; i += 1) {
      segmentedVideoListItems.push(videoListItems.splice(0,5));
    }
    return (
        <ul className="video-list col-xl-4 mx-1 mb-2 list-group">
          {segmentedVideoListItems[this.state.currentPage]}
          <Pagination 
            onSelectPage={event => this.selectPage(event)} 
            onNextPage={event => this.nextPage(event)} 
            onPreviousPage={event => this.previousPage(event)} />
        </ul>
    );
  }
};

export default VideoList;