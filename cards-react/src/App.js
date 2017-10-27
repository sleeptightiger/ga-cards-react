import React, { Component } from 'react';
import Header from './components/Header';
import CardList from './components/CardList';
import AddCard from './components/AddCard';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />

        <nav className="tabs">
          <a href="index.html" className="active">Home</a>
          <a href="add.html">Add a New Card</a>
          <a href="about.html">About</a>
        </nav>

        <CardList />

        <footer>
          <p>Made with <span class="heart">♥︎</span> at General Assembly</p>
        </footer>
      </div>

    );
  }
}

export default App;
