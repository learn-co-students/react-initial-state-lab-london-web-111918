import React, { Component } from 'react'

class Bomb extends Component {

  state = { secondsLeft: this.props.initialCount }

  timerMessage = () => 
    !this.state.secondsLeft ? "Boom!" : `${this.state.secondsLeft} seconds left before I go boom!`
    // (!this.state.secondsLeft) === (this.state.secondsLeft === 0)

  render() {
    return (
      <div>{ this.timerMessage() }</div>
    )
  }
}

export default Bomb
