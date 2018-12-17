import React, { Component } from 'react'

export default class Sibling extends Component {
  render() {
    return (
      <div>
        <p style={{ color: this.props.color}}>需要改变我的样式</p>
      </div>
    )
  }
}
