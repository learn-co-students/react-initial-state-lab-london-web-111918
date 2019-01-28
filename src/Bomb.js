import React, { Component } from 'react'

class Bomb extends Component {

  state = {
    secondsLeft: this.props.initialCount
  }

  intervalID = 0;

  componentDidMount() {
    this.intervalID = setInterval(this.timer, 1000);
  }

  timer = () => {
    if (this.state.secondsLeft > 0) {
      this.setState({ secondsLeft: this.state.secondsLeft - 1 })
    } else if (this.state.secondsLeft === 0) {
      clearInterval(this.intervalID)
    }
  }

  render() {
    return (
      <div>
        {this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`}
      </div>
    )
  }
}

export default Bomb