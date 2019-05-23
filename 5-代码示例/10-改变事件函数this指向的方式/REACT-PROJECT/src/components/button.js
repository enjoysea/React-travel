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
  
  handle () {
    console.log(1)
  }
  
  handle2() {
    console.log(2, this)
  }
  
  // 方式一：修改this指向
  handle3() {
    console.log(3, this)
  }
  
  // 方式二：修改this指向
  handle4(e) {  // handle = function (){}
    console.log(4, this)
    console.log(e)
  }
  
  // 方式三：箭头函数中修改this指向
  handle5 = (e) => {
    console.log(5, this)
    console.log(e)
    // 获取原生的事件对象
    console.log(e.nativeEvent)
  }
  
  handle6 = (e) => {
    console.log('事件对象', e)
    // 技巧：浅克隆一份。有值
    console.log({...e})
    console.log(e.type)
  
    e.persist() // 保持引用
    // 保持对事件对象的引用
    setTimeout(() => {
      // 异步拿不到属性了，内部会释放的
      console.log(e.type)
    }, 1000)
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
        <button onClick={this.handle}>{value}</button>
        <button onClick={() => {
          console.log(1)
        }}>{value}</button>
        {/*测试函数中this指向的问题*/}
        <button onClick={this.handle2}>测试类中函数this指向</button>
        <button onClick={() => {
          console.log(this)
        }}>{value}</button>
        {/*修改函数中this指向问题*/}
        
        {/*bind调用后会返回一个新的函数，
         点击button后就会将新函数给执行，
         在内部里面会将handle3给执行了，
         handle3的this，就是bind的第一个参数*/}
         
        {/* 以下bind的方式也是有问题的，因为是放在render中，每一次更新，bind 都会重新调用*/}
        {/* 改变this指向方式一 */}
        <button onClick={this.handle3.bind(this)}>修改函数中this指向3</button>
        <button onClick={this.handle4}>修改函数中this指向4</button>
        <button onClick={this.handle5}>修改函数中this指向5</button>
        {/*测试事件对象*/}
        <button onClick={this.handle6}>测试事件对象</button>
    
        {/* 给事件对象传参 */}
        <button onClick={this.handle7.bind(this, {a: 1, b: 2})}>给事件对象传参</button>
        {/* 事件对象手动的传过去 */}
        <button onClick={(e) => {
          this.handle7({a: 1, b: 2}, e)
        }}>给事件对象传参
        </button>
    
      </React.Fragment>
    )
  }
}

export default Button;
