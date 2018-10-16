import React, { Component } from 'react';
import YouTubeSearch from 'youtube-api-v3-search';
import _ from 'lodash';

import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import VideoList from '../VideoList/VideoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {viralShorts: [], selectedVideo: null, query: '', initialLoad: false};
  }

  componentDidMount() {
    this.getViralShorts(' ');
  }

  getViralShorts(query) {
    this.setState({query: query})
    const searchOptions = {
      q: query,
      type: 'video',
      videoDuration: 'short',
      order: 'viewCount',
      maxResults: '50',
    };
    YouTubeSearch(
      process.env.REACT_APP_GOOGLE_API_KEY, 
      searchOptions, 
      (error, result) => {
        this.setState({
          viralShorts: result.items,
          selectedVideo: result.items[0],
          initialLoad: true
        })
      }
    );
  }

  render() {
    const debouncedSearch = _.debounce(query => {this.getViralShorts(query)}, 200);
    if (this.state.viralShorts.length > 0) {
      return (
        <div className="app container-fluid">
          <SearchBar onSearchTermChange={debouncedSearch} />
          <div className="row">
            <VideoPlayer video={this.state.selectedVideo} />
            <VideoList 
              query={this.state.query}
              viralShorts={this.state.viralShorts} 
              onSelectVideo={video => this.setState({selectedVideo: video})} />
          </div>
        </div>
      );
    } else if (this.state.viralShorts.length === 0 && this.state.initialLoad) {
      return (
        <div className="app container-fluid">
          <SearchBar onSearchTermChange={debouncedSearch} />
          <div className="row text-center">
            <h1 className="w-100 text-light-blue mt-5">
              No Results Found!
            </h1>
            <p className="try-again w-100 text-light-blue font-weight-light mt-2">
              Please Try A Different Search Term
            </p>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default App;