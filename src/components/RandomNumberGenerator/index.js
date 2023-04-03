// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  getRandomNum = () => {
    const randomNum = Math.ceil(Math.random() * 100)
    this.setState({number: randomNum})
  }

  render() {
    const {number} = this.state
    return (
      <div className="bg-container">
        <div className="random-container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <br />
          <button type="button" className="button" onClick={this.getRandomNum}>
            Generate
          </button>
          <p className="random-number">{number}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
