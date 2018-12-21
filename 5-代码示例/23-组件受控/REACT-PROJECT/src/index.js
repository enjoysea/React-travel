import React, {Component} from 'react'
import ReactDOM from 'react-dom'

// 组件受控
//  组件状态的变化是否是 react 接管的


class MagicNumber extends Component {
  constructor(props) {
    super();
    
    this.state = {
      number: Math.random(),
      name: props.name,
      inputVal: ''
    }
  }
  
  handleButtonClick = () => {
    this.setState({
      number: this.state.inputVal,
      inputVal: ''
    })
  }
  
  handleInputChange = (ev) => {
    let value = ev.target.value
    console.log(value)
    this.setState({
      inputVal: value
    })
  }
  
  render() {
    let {number, name, inputVal} = this.state
    console.log(this.outDIV, 'render')
    return (
      <div id="outDIV">
        <h2>{name}</h2>
        <input
          type="text"
          value={inputVal}
          ref={el => this.input = el}
          onChange={this.handleInputChange}
        />
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
