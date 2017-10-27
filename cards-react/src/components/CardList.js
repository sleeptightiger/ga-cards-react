import React, { Component } from 'react';
import Card from './Card';
import '../css/CardList.css';

class CardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titles: ["I couldn't complete my assignment because", "I get by with a little help from"]
    }
  }
  render() {

    let Cards = this.state.titles.map((title, key) => <Card title={title} key={key}/>)

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
