import React, { Component } from 'react';
import Die from './Die';

class RollDie extends Component {
  static defaultProps = {
    sides: ['one', 'two', 'three', 'four', 'five', 'six']
  };
  constructor(props) {
    super(props);
    this.state = {
      die1: 'one',
      die2: 'one'
    }
    this.roll = this.roll.bind(this);
  }
  roll() {
    const newDie1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
    const newDie2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
    this.setState({die1: newDie1, die2: newDie2, rolling: true});
    setTimeout(() => {
      this.setState({rolling: false});
    }, 500);
  }

  render() {
    return (
      <div className="RollDie">
        <Die face={this.state.die1} />
        <Die face={this.state.die2} />
        <button onClick={this.roll} disabled={this.state.rolling}>
          {this.state.rolling ? 'Rolling...' : 'Roll Dice!'}
        </button>
      </div>
    );
  }
}

export default RollDie;