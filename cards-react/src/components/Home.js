import React, { Component } from 'react';

import '../css/Home.css';

class Home extends Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmitQuery}>
        <input type="text" onChange={this.props.handleSearchInput}/>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Home;
