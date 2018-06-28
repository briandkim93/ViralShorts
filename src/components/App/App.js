import React, { Component } from 'react';
import YouTubeSearch from 'youtube-api-v3-search';
import _ from 'lodash';
import { GOOGLE_API_KEY } from '../api-key.js';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import VideoList from '../VideoList/VideoList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {viralShorts: [], selectedVideo: null};

    this.getViralShorts(' ');
  }
  getViralShorts(query) {
    const searchOptions = {
      q: query,
      type: 'video',
      videoDuration: 'short',
      order: 'viewCount',
      maxResults: '50'
    };
    YouTubeSearch(
      GOOGLE_API_KEY, 
      searchOptions, 
      (error, result) => {
        this.setState({viralShorts: result.items});
        this.setState({selectedVideo: result.items[0]})
      }
    );

  }

  render() {
    const debouncedSearch = _.debounce(query => {this.getViralShorts(query)}, 200);
    return (
      <div className="app container-fluid">
        <SearchBar onSearchTermChange={debouncedSearch} />
        <div className="row">
          <VideoPlayer video={this.state.selectedVideo} />
          <VideoList 
            viralShorts={this.state.viralShorts} 
            onSelectVideo={video => this.setState({selectedVideo: video})} />
        </div>
      </div>
    );
  }
}

export default App;