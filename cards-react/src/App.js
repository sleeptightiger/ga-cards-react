import React, { Component } from 'react';
import Header from './components/Header';
import CardList from './components/CardList';
import AddCard from './components/AddCard';
import Footer from './components/Footer';
import './css/App.css';

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

        <Footer />
      </div>

    );
  }
}

export default App;
