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
      inputVal: '',
      msg: 'fdsad'
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
  
  /*changeMsg = (val) => {
   this.setState({
   msg: val
   })
   }*/
  
  changeMsg = () => {
    this.setState({
      msg: this.sunInput.value
    })
  }
  
  render() {
    let {number, name, inputVal, msg} = this.state
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
        {/*兄弟组件一：接收组件*/}
        <Receive msg={msg}></Receive>
        <p>--------------</p>
        {/*组件不受控*/}
        <Input getInput={el => this.sunInput = el}></Input>
        <p>--------------</p>
        {/*兄弟组件二：发送组件*/}
        <Send changeMsg={this.changeMsg}></Send>
        <p>--------------</p>
        {/*<button onClick={this.handleButtonClick}>change number</button>*/}
        <button onClick={this.handleButtonClick}>change number</button>
      </div>
    )
  }
}
// 兄弟组件的交流
// 新增组件一
function Send(props) {
  return (
    <div>
      <h2>发送消息</h2>
      {/*<button onClick={() => props.changeMsg(Math.random())}>send</button>*/}
      <button onClick={props.changeMsg}>send</button>
    </div>
  )
}

// 新增组件二
function Receive(props) {
  return (
    <div>
      <h2>接收</h2>
      <p>{props.msg}</p>
    </div>
  )
}

// 新增组件三
// <Input getInput={el => this.sunInput = el}></Input>
function Input({getInput}) {
  return (
    <input type="text" ref={getInput}/>
  )
}

ReactDOM.render(
  <div>
    <MagicNumber name="m1"></MagicNumber>
  </div>,
  document.getElementById('root')
)
