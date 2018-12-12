import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

// import List from './components/list'

function CreateH(props){
  return <h2>
    <span>{props.title}</span>
  </h2>
}

// 静态属性 定义在函数上的属性
// 函数其实也是一个对象，只不过这个对象比较特殊，是一个可执行的函数

CreateH.defaultProps = {
  title: '默认值'
}

ReactDOM.render(
<div>
    <CreateH/>
</div>,
document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
