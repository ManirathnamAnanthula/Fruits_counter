import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  onMangoCount = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  onBananaCount = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state

    return (
      <div className="container">
        <h1 className="text-center">
          Bob ate <span className="count">{mango}</span> mangoes
          <span className="count">{banana}</span> bananas
        </h1>
        <div className="image-container">
          <div className="fruitContainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              className="fruitImage"
              alt="mango"
            />
            <button
              className="button"
              onClick={this.onMangoCount}
              type="button"
            >
              Eat Mango
            </button>
          </div>

          <div className="fruitContainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              className="fruitImage"
              alt="banana"
            />
            <button
              className="button"
              onClick={this.onBananaCount}
              type="button"
            >
              Eat Banana
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
