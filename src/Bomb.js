// your Bomb code here!
import React, {Component} from 'react'
export default class Bomb extends Component{

  constructor(props) {
    super(props)
      this.state = {
        secondsLeft: this.props.initialCount
      }
  }

  isZero = () => {
    if (this.state.secondsLeft === 0) {
      return `Boom!`
    }
    else {
      return `${this.state.secondsLeft} seconds left before I go boom!`
    }
  }

  render(){
    return (
      <div className="bomb"
      >
      {this.isZero()}
      </div>
    )
  }

}
