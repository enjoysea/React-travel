import React from 'react'

class Button extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      color: '',
      m: this.props.n // 初始状态的值是外界传入的props作为初始状态的值
    }
  }
  
  handle = () => {
    this.props.value = 123 // 不能重新赋值
  }
  
  render() {
    return (
      <React.Fragment>
        {/*this.props.value 数据是由外面来决定的*/}
        {/*场景二：状态是由外部来决定的*/}
        <button onClick={this.handle}>{this.props.value}</button>
        {/*style注意写成一个对象的形式，
         原生style对应也是一个对象*/}
        
        {/*这个button的状态是由自身来决定的*/}
        {/*场景一：状态是由自身来决定的*/}
        <button onClick={() => {
          this.setState({
            color: 'red'
          })
        }} style={{color: this.state.color}}>改变样式
        </button>
        {/*场景三：组件的初始状态是外面传入的props,然后改变初始值*/}
        <button onClick={() => {
          let k = this.state.m
          k++
          this.setState({
            m: k
          })
        }}>依次加1
        </button>
        <p>外界传入的数字：{this.props.n}</p>
        <p>内部的数字状态：{this.state.m}</p>
      </React.Fragment>
    )
  }
}
export default Button
