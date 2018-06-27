import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { query: '' };
  }
  render() {
    return (
      <div className="search-bar col-lg-7 my-3">
        <input
          className="col-12"
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