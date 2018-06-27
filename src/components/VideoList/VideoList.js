import React, { Component } from 'react';
import './VideoList.css'

import VideoListItem from '../VideoListItem/VideoListItem';

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
        <ul className="video-list col-lg-4 mx-1 list-group">
          {segmentedVideoListItems[this.state.currentPage]}
        <nav className="my-2" aria-label="Search result list navigation.">
          <ul className="pagination pagination-sm justify-content-center">
            <li className="page-item" onClick={this.previousPage.bind(this)}>
              <a className="page-link" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span className="sr-only">Previous</span>
              </a>
            </li>
            <li id="page-1" className="page-item" onClick={this.selectPage.bind(this)}><a className="page-link">1</a></li>
            <li id="page-2" className="page-item" onClick={this.selectPage.bind(this)}><a className="page-link">2</a></li>
            <li id="page-3" className="page-item" onClick={this.selectPage.bind(this)}><a className="page-link">3</a></li>
            <li id="page-4" className="page-item" onClick={this.selectPage.bind(this)}><a className="page-link">4</a></li>
            <li id="page-5" className="page-item" onClick={this.selectPage.bind(this)}><a className="page-link">5</a></li>
            <li id="page-6" className="page-item" onClick={this.selectPage.bind(this)}><a className="page-link">6</a></li>
            <li id="page-7" className="page-item" onClick={this.selectPage.bind(this)}><a className="page-link">7</a></li>
            <li id="page-8" className="page-item" onClick={this.selectPage.bind(this)}><a className="page-link">8</a></li>
            <li id="page-9" className="page-item" onClick={this.selectPage.bind(this)}><a className="page-link">9</a></li>
            <li id="page-10" className="page-item" onClick={this.selectPage.bind(this)}><a className="page-link">10</a></li>
            <li className="page-item" onClick={this.nextPage.bind(this)}>
              <a className="page-link" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
                <span className="sr-only">Next</span>
              </a>
            </li>
          </ul>
        </nav>
        </ul>
    );
  }
};

export default VideoList;