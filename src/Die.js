import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {  }
  // }

  render() {
    return (
      <div className="Die">
        <i className={`fas fa-dice-${this.props.face}`}></i>
      </div>
    );
  }
}

export default Die;