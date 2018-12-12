import React from 'react'

/* function handle () {
  console.log(1)
} */
class Button extends React.Component {
  
  static defaultProps = {
    value: '确定'
  }
  
  handle () {
    console.log(1)
  }
  
  handle2 () {
    console.log(2, this)
  }
  
  render () {
    let {value} = this.props
    // 不要将函数定义在jsx
    // 1.事件触发之后，逻辑会很多，造成jsx代码臃肿
    // 2.状态发生变化，视图要更新，重新调用render,箭头函数会重新定义，没必要
    return (
      <React.Fragment>
        <button onClick={this.handle}>{value}</button>
        {/*也可以写成普通的函数*/}
        <button onClick={()=>{
          console.log(1)
        }}>{value}</button>
        {/*测试函数中this指向的问题*/}
        <button onClick={this.handle2}>测试类中函数this指向</button>
        {/*this是在render里定义的，所以this就指代render函数中的this*/}
        <button onClick={()=>{
          console.log(this)
        }}>{value}</button>
        {/*修改类中函数this指向问题*/}
      </React.Fragment>
    )
  }
}

export default Button;