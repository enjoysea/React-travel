import React from 'react'

/* function handle () {
 console.log(1)
 } */

class Button extends React.Component {
  
  constructor(props) {
    console.log('#', props)
    super(props)
    // 给实例上添加一个方法
    // 初始化去改变this指向
    // 改变this指向方式二
    this.handle4 = this.handle4.bind(this)
  }
  
  static defaultProps = {
    value: '确定'
  }
  
  handle7 = (obj, e) => {
    console.log(obj, e)
  }
  
  render() {
    let {value} = this.props
    
    // 1.事件触发之后，逻辑会很多，造成jsx代码臃肿
    // 2.状态发生变化，视图要更新，重新调用render,箭头函数会重新定义，没必要
    return (
      <React.Fragment>
        {/* 给事件对象传参 */}
        <button onClick={this.handle7.bind(this, {a: 1, b: 2})}>给事件对象传参</button>
    
        {/* 事件对象手动的传过去 */}
        {/* 这种方式应用最多，普用 */}
        <button onClick={(e) => {
          this.handle7({a: 1, b: 2}, e)
        }}>给事件对象传参
        </button>
      </React.Fragment>
    )
  }
}

export default Button;
