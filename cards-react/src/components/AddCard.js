import React, { Component } from 'react';
import Card from './Card';
import '../css/AddCard.css';
import {
  database
} from 'firebase';

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
            <Card title={this.state.question} isFlipped={true}/>
          </div>
        </section>
      </div>
    );
  }
}

export default AddCard;
