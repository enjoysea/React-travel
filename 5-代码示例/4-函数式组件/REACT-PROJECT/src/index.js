import React from 'react';
import ReactDOM from 'react-dom';

// serviceWorker主要作用：应用离线也能访问，并且加载的快一点
import * as serviceWorker from './serviceWorker';

let h = <h2>
  <span>hello,react!</span>
</h2>

// 函数式组件
// 输入 传入组件的参数 props 定制组件的数据
// 输出 返回值 描述UI信息
// UI = fn(data)
function createH (props) { // { title:} properties
  return <h2>
    <span>{props.title}</span>
  </h2>
}

ReactDOM.render(
  <div>
    {h}
    {h}
    {createH({title: 'hello,react!'})}
    {createH({title: 'hello,miaov!'})}
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
