import React, {Component} from 'react'
import ReactDOM from 'react-dom'

// 生命周期
// Mounting 装载
//   constructor
//   static getDerivedStateFromProps(prop, state)
//   render()
//   componentDidMount()
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
      name: props.name
    }
    
    console.log('step1', 'constructor')
  }
  
  static getDerivedStateFromProps(prop, state) {
    console.log('step2', 'getDerivedStateFromProps')
    return null
  }
  
  componentDidMount() {
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
      <div>
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
