import React, { Component } from 'react'

export default class Sibling extends Component {
  render() {
    
    console.log(this.props)
    let bl = typeof this.props.children === 'function'
    return (
      <div>
        <p>测试children</p>
        {/*<div>{this.props.children}</div>*/}
        {
          bl ? this.props.children('hello,我是子级传来的') : null
        }
      </div>
    )
  }
}
