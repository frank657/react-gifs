import React, { Component } from 'react';

class SearchBar extends Component {
  eventHandler = (event) => {
    console.log(event.target.value);
    this.props.search(event.target.value);
  }

  render() {
    return (
      <input type="Input your search" className="form-search" onChange={this.eventHandler} />
    );
  }
}

export default SearchBar;
