import React from 'react'


export default class extends React.Component {
  state = {count: 0}

  _handlePlusClick() {
    this.setState({count: this.state.count + 1})
  }

  _handleMinusClick() {
    this.setState({count: this.state.count - 1})
  }

  render() {
    return (
      <div>
        <h1>React.js components</h1>
        <h2>Counter example</h2>
        <p>{this.state.count}</p>
        <button onClick={::this._handlePlusClick}>+</button>
        <button onClick={::this._handleMinusClick}>-</button>
      </div>
    )
  }
}
