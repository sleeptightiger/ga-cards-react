import React, { Component } from 'react';

import '../css/Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <header className="navbar">
          <h1 className="pull-left">Cards Against Assembly</h1>
        </header>
      </div>
    );
  }
}

export default Header;
