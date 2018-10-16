import React, { Component } from 'react';
import logo from './images/logo.png';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {query: ''};
  }
  
  render() {
    return (
      <div className="search-bar my-3 media">
        <a href="."><img className="align-self-center mr-2" src={logo} alt="ViralShorts Logo" /></a>
        <input
          className="col-12 col-xl-7 media-body border border-info"
          type="text" 
          placeholder="Search YouTube" 
          value={this.state.query}
          onChange={event => {
            this.props.onSearchTermChange(event.target.value);
            this.setState({query: event.target.value});
          }} />
      </div>
    );
  }
}

export default SearchBar;