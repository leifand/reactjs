import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Deck from './decklib';

const deck = new Deck();
deck.generate_deck();
deck.shuffle();

class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;
  }

  render() {
    const status = 'Next player: value';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(deck.deal().value)}
          {this.renderSquare(deck.deal().value)}
          {this.renderSquare(deck.deal().value)}
          {this.renderSquare(deck.deal().value)}
          {this.renderSquare(deck.deal().value)}
          {this.renderSquare(deck.deal().value)}
          {this.renderSquare(deck.deal().value)}
          {this.renderSquare(deck.deal().value)}
          {this.renderSquare(deck.deal().value)}
          {this.renderSquare(deck.deal().value)}
          {this.renderSquare(deck.deal().value)}
          {this.renderSquare(deck.deal().value)}
          {this.renderSquare(deck.deal().value)}
        </div>
        <div className="board-row">
        {this.renderSquare(deck.deal().value)}
          {this.renderSquare(deck.deal().value)}
          {this.renderSquare(deck.deal().value)}
          {this.renderSquare(deck.deal().value)}
          {this.renderSquare(deck.deal().value)}
          {this.renderSquare(deck.deal().value)}
          {this.renderSquare(deck.deal().value)}
          {this.renderSquare(deck.deal().value)}
          {this.renderSquare(deck.deal().value)}
          {this.renderSquare(deck.deal().value)}
          {this.renderSquare(deck.deal().value)}
          {this.renderSquare(deck.deal().value)}
          {this.renderSquare(deck.deal().value)}
        </div>
        <div className="board-row">
        {this.renderSquare(deck.deal().value)}
          {this.renderSquare(deck.deal().value)}
          {this.renderSquare(deck.deal().value)}
          {this.renderSquare(deck.deal().value)}
          {this.renderSquare(deck.deal().value)}
          {this.renderSquare(deck.deal().value)}
          {this.renderSquare(deck.deal().value)}
          {this.renderSquare(deck.deal().value)}
          {this.renderSquare(deck.deal().value)}
          {this.renderSquare(deck.deal().value)}
          {this.renderSquare(deck.deal().value)}
          {this.renderSquare(deck.deal().value)}
          {this.renderSquare(deck.deal().value)}
        </div>
        <div className="board-row">
        {this.renderSquare(deck.deal().value)}
          {this.renderSquare(deck.deal().value)}
          {this.renderSquare(deck.deal().value)}
          {this.renderSquare(deck.deal().value)}
          {this.renderSquare(deck.deal().value)}
          {this.renderSquare(deck.deal().value)}
          {this.renderSquare(deck.deal().value)}
          {this.renderSquare(deck.deal().value)}
          {this.renderSquare(deck.deal().value)}
          {this.renderSquare(deck.deal().value)}
          {this.renderSquare(deck.deal().value)}
          {this.renderSquare(deck.deal().value)}
          {this.renderSquare(deck.deal().value)}
        </div>
      </div>
    );
  }
}
  
class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
  