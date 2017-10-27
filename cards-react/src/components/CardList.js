import React, { Component } from 'react';
import Card from './Card';
import '../css/CardList.css';
import {
  database,
  firebaseListToArray
} from '../utils/firebase.js';

class CardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: ["I couldn't complete my assignment because", "I get by with a little help from"]
    }
  }

  componentWillMount() {
    //TODO get questions from db
    database.ref('/memes').on('value', data => {
    const results = firebaseListToArray(data.val());
    this.setState({
      memes: results
    });
  });
  }

  render() {

    let Cards = this.state.questions.map((question, key) => <Card question={question} key={key}/>)

    return (
      <div className="CardList">
        <section id="cards" className="container-fluid">
          <div className="row">
            {Cards}
          </div>
        </section>
      </div>
    );
  }
}

export default CardList;
