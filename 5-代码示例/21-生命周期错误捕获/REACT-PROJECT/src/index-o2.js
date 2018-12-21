import React, {Component} from 'react'
import ReactDOM from 'react-dom'

// 只有类组件才有生命周期，函数式组件没有生命周期

// 生命周期
// Mounting 装载
//   constructor 执行一次
//   static getDerivedStateFromProps(prop, state)
//    在你 render 之前，给你一次改变 state 的机会， 不改变就返回null
//   render()
//   componentDidMount()  执行一次
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
//    它执行的时候，新的visualDOM的结构已经计算出来了
//    但是，这个时候，浏览器DOM元素还没有更新
//   componentDidUpdate(pProps, pState, snapshot)
//    更新已经完成的时候调用
// Unmounting 卸载
//   componentWillUnmount()
//      只执行一次
//  错误处理
//    componentDidCatch(error, info)
//      捕获子组件的生命周期的错误

class MagicNumber extends Component {
  constructor(props) {
    super();
    
    this.state = {
      number: Math.random(),
      name: props.name + '888',
      hasError: false
    }
  }
  
  componentDidCatch(error, info) {
    console.log('捕捉到错误')
    this.setState({
      hasError: true
    })
  }
  
  handleButtonClick = () => {
    this.setState({
      number: Math.random()
    })
  }
  
  render() {
    
    let {number, name, hasError} = this.state
    return (
      <div id="outDIV">
        <h2>{name}</h2>
        <p>{number}!apple</p>
        <p>------------</p>
        { hasError ? (
            <p>SUN 崩溃了</p>
          ) : (
            <Sun num={number}/>
        )}
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
  
  componentDidMount() {
    console.log('sun 装载')
  }
  
  componentDidUpdate() {
    console.log('sun 更新')
  }
  
  componentWillUnmount() {
    console.log('sun 卸载')
  }
  
  render() {
    if (this.props.num > 0.5) throw Error('我废了')
    return (
      <div>SUN</div>
    )
  }
}

ReactDOM.render(
  <div>
    <MagicNumber name="m1"></MagicNumber>
  </div>,
  document.getElementById('root')
)
