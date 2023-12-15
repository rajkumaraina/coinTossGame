import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {head: true, headCount: 0, tailCount: 0, total: 0}

  coinChange = () => {
    const {head, headCount, tailCount, total} = this.state
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prev => ({
        head: true,
        headCount: prev.headCount + 1,
        total: prev.total + 1,
      }))
    } else {
      this.setState(prev => ({
        head: false,
        tailCount: prev.tailCount + 1,
        total: prev.total + 1,
      }))
    }
  }

  render() {
    const {head, headCount, tailCount, total} = this.state
    let imageElement
    if (head === true) {
      imageElement = (
        <img
          src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
          alt="toss result"
          className="img"
        />
      )
    } else {
      imageElement = (
        <img
          src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
          alt="toss result"
          className="img"
        />
      )
    }
    return (
      <div className="mainContainer">
        <div className="insideContainer">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          {imageElement}
          <button className="button" type="button" onClick={this.coinChange}>
            Toss Coin
          </button>
          <div className="countContainer">
            <p className="count">Total: {total}</p>
            <p className="count">Heads: {headCount}</p>
            <p className="count">Tails: {tailCount}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
