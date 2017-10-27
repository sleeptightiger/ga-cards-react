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
    database.ref('/questions').on('value', data => {
      const results = firebaseListToArray(data.val());
      console.log(results);
      const questions = results.map((result) => result.question)
      this.setState({
        questions: questions
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
