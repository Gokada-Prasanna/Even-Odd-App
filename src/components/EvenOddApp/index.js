// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  clickHandler = () => {
    const randomNumber = Math.ceil(Math.random() * 100)
    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }

  checkEvenOrOdd = () => {
    const {count} = this.state

    if (count % 2 !== 0) {
      return 'Count is Odd'
    }
    return 'Count is Even'
  }

  render() {
    const {count} = this.state

    const evenOrOddText = this.checkEvenOrOdd()

    return (
      <div className="bgContainer">
        <div className="innerContainer">
          <h1 className="countText">
            Count <span className="countNumber">{count}</span>
          </h1>
          <p className="evenOrOddText">{evenOrOddText}</p>
          <button type="button" className="button" onClick={this.clickHandler}>
            Increment
          </button>
          <p className="disclaimer">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
