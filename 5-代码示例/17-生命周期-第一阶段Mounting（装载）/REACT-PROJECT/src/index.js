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
//   static getDerivedStateFromProps(prop, state)
//   shouldComponentUpdate(nextProps, nextState)
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
    
    console.log('step1', 'constructor')
  }
  
  // 正式渲染前，给一次更改state的机会
  static getDerivedStateFromProps(props, state) {
    console.log(props, state)
    console.log('step2', 'getDerivedStateFromProps')
    console.log(document.getElementById('outDIV')) // null
    // return null
    return {
      // name是state.name
      name: props.name === state.name ? props.name + 'OK' : props.name + 'FAIL'
    }
  }
  
  componentDidMount() {
    console.log(document.getElementById('outDIV'))
    console.log('step4', '组件装载完成')
  }
  
  handleButtonClick = () => {
    this.setState({
      number: Math.random()
    })
  }
  
  render() {
    console.log('step3', 'render')
    let {number, name} = this.state
    return (
      <div id="outDIV">
        <h2>{name}</h2>
        <p>{number}!apple</p>
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
