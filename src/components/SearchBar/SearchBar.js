import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { query: '' };
  }
  render() {
    return (
      <div className="search-bar">
        <input 
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