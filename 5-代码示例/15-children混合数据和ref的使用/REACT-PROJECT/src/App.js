import React, {Component} from 'react'
import TestChildren from './components/testChildren'
class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  getFocusHandle = () => {
    // input 获取焦点
    console.log(this.refs)
    this.refs.input.focus()
  }
  
  
  render() {
    
    return (
      <div className="App">
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
        也可以传一个表达式，比如传一个对象*/}
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
        <hr />
      </div>
    );
  }
}

export default App;
