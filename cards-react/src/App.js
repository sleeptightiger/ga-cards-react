import React, { Component } from 'react';
import Header from './components/Header';
import CardList from './components/CardList';
import AddCard from './components/AddCard';
import Footer from './components/Footer';
import About from './components/About';
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />

        <Router>
          <div>
            <nav className="tabs">
              <NavLink exact className="link" to="/">Home</NavLink>{' '}
              <NavLink className="link" to="/newCard">Add a New Card</NavLink>{' '}
              <NavLink className="link" to="/about">About</NavLink>{' '}
            </nav>
            <Switch>
              <Route exact path="/" component={CardList} />
              <Route path="/newCard" component={AddCard}/>
              <Route path="/about" component={About}/>
            </Switch>
          </div>
        </Router>

        <Footer />
      </div>

    );
  }
}

export default App;
