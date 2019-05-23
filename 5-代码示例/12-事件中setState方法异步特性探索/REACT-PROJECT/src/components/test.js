import React, {Component} from 'react'

class Test extends Component {
  constructor(props) {
    super(props)
    this.state = {
      n: 1,
      m: 1
    }
  }
  
  add = () => {
    // 累加
    // 不能够用上一状态计算下一状态
    // 可以理解为异步的特性
    
    this.setState({
      n: this.state.n + 1
    });
    this.setState({
      n: this.state.n + 1
    });
    this.setState({
      n: this.state.n + 1
    });
   
    // 页面展示是2
    // 先执行下面，还是 1，因为表现出来是异步的
    console.log(this.state.n)
  }
  
  add2 = () => {
    // state就是上一个状态
    this.setState((state) => { // {m:1}
      return {
        m: state.m + 1
      }
    })
    this.setState((state) => { // {m:2}
      return {
        m: state.m + 1
      }
    })
    this.setState((state) => { // {m:3}
      return {
        m: state.m + 1
      }
    }, () => {
      // 数据更新之后，DOM也更新之后，会触发这个回调，用来操作页面中的元素
      console.log('更新后的值', this.state.m)
    })
    
    // 页面展示是4
    // 还是 1，因为表现出来是异步的
    // 先执行这句话，再走上面的
    console.log(this.state.m)
  }
  
  render() {
    return (
      <div>
        <p>{this.state.n}</p>
        <button onClick={this.add}>累加</button>
        
        <p>{this.state.m}</p>
        <button onClick={this.add2}>累加2</button>
      </div>
    )
  }
}

export default Test
