import React, { Component } from 'react';
import Card from './Card';
import '../css/AddCard.css';
import {
  database
} from '../utils/firebase.js';

class AddCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: ''
    }
    this.onChangeQuestion = this.onChangeQuestion.bind(this);
    this.onSubmitQuestion = this.onSubmitQuestion.bind(this);

  }

  onChangeQuestion(e) {
    console.log('onChangeQuestion');
    this.setState({
      question: this.question.value
    })

  }

  onSubmitQuestion(e) {
    e.preventDefault();
    database.ref('/questions')
    .push({
      question: this.state.question
    })
    .then(() => {
      window.location.replace('/')
    })
    .catch(err => console.log(err));

  }

  render() {
    return (
      <div className="AddCard">
        <section className="container-fluid">
          <div className="row">
            <form name="add-card" id="add-card" onSubmit={this.onSubmitQuestion}>
              <input onChange={this.onChangeQuestion} type="text" ref={input => this.question = input} placeholder="What's your question?" />
            </form>
            <br />
            <Card question={this.state.question} isFlipped={true}/>
          </div>
        </section>
      </div>
    );
  }
}

export default AddCard;
