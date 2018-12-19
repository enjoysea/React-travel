import React, {Component} from 'react'
import ReactDOM from 'react-dom'

// 生命周期
// Mounting 装载
//   constructor
//   static getDerivedStateFromProps(prop, state)
//    在你 render 之前，给你一次改变 state 的机会， 不改变就返回null
//   render()
//   componentDidMount()
//    获取真正的 DOM 元素
//
// Update 更新
//   父组件更新，（已挂载）子组件也会随着更新
//   static getDerivedStateFromProps(prop, state)
//   shouldComponentUpdate(nextProps, nextState)
//    用于优化性能
//    返回一个 bool 值
//    true: 组件进行正常的更新流程
//    false：后面的生命周期函数不会执行，视图不会更新
//   render
//   getSnapshotBeforeUpdate(prevProp, prevState)
//   componentDidUpdate()
//
// Unmounting 卸载
//   componentWillUnmount()


class MagicNumber extends Component {
  constructor(props) {
    super();
    
    this.state = {
      number: Math.random(),
      name: props.name + '888'
    }
  }
  
  // 正式渲染前，给一次更改state的机会
  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps')
    return null
  }
  
  // 做性能优化
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate')
    // 可以进行比较props的值，state的值和原来的是否一样，如果一样，就不需要更新
    // 判断这一过程，本身就需要一些CPU的消耗
    console.log(nextProps, nextState)
    return true
    // return false // 阻断render的执行
  }
  
  handleButtonClick = () => {
    this.setState({
      // number: Math.random()
      number: 777
    })
  }
  
  render() {
    console.log('render')
    let {number, name} = this.state
    return (
      <div id="outDIV">
        <h2>{name}</h2>
        <p>{number}!apple</p>
        {/*点击上面有变化，而下面没有变化*/}
        <Sun num={number}/>
        -------
        <button onClick={this.handleButtonClick}>change number</button>
      </div>
    )
  }
}

class Sun extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      num: props.num
    }
  }
  
  static getDerivedStateFromProps(prop, state) {
    return {
      num: prop.num // 更新到state上面
    }
  }
  
  render() {
    return (
      <div>{this.state.num}</div>
    )
  }
}

ReactDOM.render(
  <div>
    <MagicNumber name="m1"></MagicNumber>
  </div>,
  document.getElementById('root')
)
