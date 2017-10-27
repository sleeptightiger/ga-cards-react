import React, { Component } from 'react';
import Card from './Card';
import '../css/AddCard.css';

class AddCard extends Component {
  render() {
    return (
      <div className="AddCard">
        <section class="container-fluid">
          <div class="row">
            <form name="add-card" id="add-card">
              <input type="text" name="question" id="question" placeholder="What's your question?" />
            </form>
            <br />
            <Card />
          </div>
        </section>
      </div>
    );
  }
}

export default AddCard;
