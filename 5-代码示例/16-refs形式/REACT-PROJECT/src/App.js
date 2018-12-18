import React, {Component} from 'react'
import TestChildren from './components/testChildren'
import Modal from './components/modal'

class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = {}
    this.ps = []
    this.spans = []
  
    // ref的形式四：createRef
    this.list = React.createRef()
    this.box = React.createRef()
    this.modal = React.createRef()
  }
  
  getFocusHandle = () => {
    // input 获取焦点
    console.log(this.refs)
    this.refs.input.focus()
    console.log(this)
    
    // 拿到createRef的元素
    console.log(this.list.current)
    console.log(this.box.current)
    console.log(this.modal.current)
  }
  
  createList = () => {
    // 结构是混合在子组件上的，但是ref是放在app组件上的
    // return <ul ref="list">
    return <ul ref={this.list}>
      <li>123</li>
      <li>123</li>
      <li>123</li>
    </ul>
  }
  
  render() {
    
    return (
      <div ref={this.box} className="App">
        <h2 ref="miaov">测试children</h2>
        {/*children混合数据方式一
         简单值可以直接通过props传递，如就传123
         如果是多值，this.props就会变成数组的形式
         */}
        <TestChildren>
          123
          <div>hello</div>
          <div>hello</div>
          <div>hello</div>
        </TestChildren>
        {/*children混合数据方式二
         也可以传一个表达式，比如{}*/}
        <TestChildren>
          {
            {
              a: 1
            }
          }
        </TestChildren>
        {/*children混合数据方式三
         也可能直接传递一个函数*/}
        <TestChildren>
          {
            (child) => {
              return <div>{child}</div>
            }
          }
        </TestChildren>
        <hr />
        <hr />
        <hr />
        <h2>测试refs</h2>
        <button onClick={this.getFocusHandle}>让input获取焦点</button>
        {/*同一个名字不能映射多个元素，后面会覆盖前面*/}
        <input ref="input"/>
        <input ref="input"/>
        <input ref="input"/>
        <input ref="input"/>
        
        {/*ref的形式一：字符串*/}
        {/*<p ref={(abc) => this.p1 = abc}>测试函数形式的ref</p>
         <p ref={(abc) => this.p2 = abc}>测试函数形式的ref</p>
         <p ref={(abc) => this.p3 = abc}>测试函数形式的ref</p>*/}
        
        {/*ref的形式二：push*/}
        <p ref={(abc) => this.ps.push(abc)}>测试函数形式的ref</p>
        <p ref={(abc) => this.ps.push(abc)}>测试函数形式的ref</p>
        <p ref={(abc) => this.ps.push(abc)}>测试函数形式的ref</p>
        
        {/*{
         [1, 2, 3, 4].map((item) => {
         return <span key={item}>{item}</span>
         })
         }*/}
        
        {/*ref的形式三：map*/}
        {
          [1, 2, 3, 4].map((item) => {
            return <span key={item} ref={(s) => this.spans.push(s)}>{item}</span>
          })
        }
        
        <hr />
        <hr />
        <hr />
        {/*组件上的ref是不传递给子组件的*/}
        {/*ref的形式五：组件上的ref*/}
        <Modal ref={this.modal} title="显示标题">
          {this.createList}
        </Modal>
      </div>
    );
  }
}

export default App;
