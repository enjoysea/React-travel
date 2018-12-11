import React from 'react';
import ReactDOM from 'react-dom';

import Miaov from './components/title'

// serviceWorker主要作用：应用离线也能访问，并且加载的快一点
import * as serviceWorker from './serviceWorker';

let h = <h2>
  <span>hello,react!</span>
</h2>

// 函数式组件
// 输入 传入组件的参数 props 定制组件的数据
// 输出 返回值 描述UI信息
// UI = fn(data)
function CreateH (props) { // { title:} properties
  return <h2>
    <span>{props.title}</span>
  </h2>
}

class Test extends React.Component{
  render () {
    console.log(this) // props = {title:'456', a:'10'}
    return <h2>
      <span>{this.props.title}</span>
    </h2>
  }
}

// 函数式组件 VS 类组件
// 函数式组件 轻 输入数据输出显示UI信息 展示 没有状态 没有生命周期
// 类组件 重 展示 有组件的状态，有生命周期


ReactDOM.render(
  <div>
    {h}
    {h}
    {CreateH({title: 'hello,react!'})}
    {CreateH({title: 'hello,miaov!'})}
    <CreateH title="123"/>
    {/*new Test().render()*/}
    <Test title="456" a="10"/>
    <Miaov />
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
