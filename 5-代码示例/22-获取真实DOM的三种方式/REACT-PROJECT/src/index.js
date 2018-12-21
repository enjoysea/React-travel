import React, {Component, createRef} from 'react'
import ReactDOM from 'react-dom'

// 在react 中获取dom元素 有以下三种方式

// 回调

// createRef

// 字符串（过时）


class MagicNumber extends Component {
  constructor(props) {
    super();
    
    this.state = {
      number: Math.random(),
      name: props.name
    }
    this.outDIV = createRef()
    console.log(this.outDIV, 'ooo')
    
  }
  
  handleButtonClick = () => {
    console.log(this.outDIV)
    this.setState({
      number: Math.random()
    })
  }
  
  componentDidMount () {
    console.log(this.refs.outDIV, 'mounted')
    console.log(this.refs.h2, 'mounted')
  }
  
  render() {
    let {number, name } = this.state
    console.log(this.outDIV, 'render')
    return (
      <div id="outDIV" ref="outDIV">
        <h2 ref="h2">{name}</h2>
        <p>{number}!apple</p>
        <p>--------------</p>
        <button onClick={this.handleButtonClick}>change number</button>
      </div>
    )
  }
}


ReactDOM.render(
  <div>
    <MagicNumber name="m1"></MagicNumber>
  </div>,
  document.getElementById('root')
)
