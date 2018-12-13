import React from 'react'

class Button extends React.Component {
  
  handle = () =>{
    this.props.value = 123 // 不能重新赋值
  }
  
  render () {
    return (
      <React.Fragment>
        <button onClick={this.handle}>{this.props.value}</button>
      </React.Fragment>
    )
  }
}

export default Button