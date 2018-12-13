import React, { Component } from 'react';
import Button from './components/button'

class App extends Component {
  
  constructor(props){
    super(props)
    // 设置组件的状态，数据
    this.state = {
      val: '按钮'
    }
  }
  
  changeVal = () => {
    //this.state.val = '123' // 数据发生变化
    console.log(this.state)
    this.setState({
      val: '123'
    })
  }
  
  render () {
    let {val} = this.state
    console.log('调用了')
    return (
      <div className="App">
        <button onClick={this.changeVal}>改变val的值</button>
        <p>{val}</p>
        <hr/>
        <Button value={val} />
      </div>
    )
  }
}

export default App
