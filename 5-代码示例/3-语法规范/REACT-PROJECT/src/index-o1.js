import React from 'react';
import ReactDOM from 'react-dom';

// serviceWorker主要作用：应用离线也能访问，并且加载的快一点
import * as serviceWorker from './serviceWorker';

// 方法一
/* let h = <div>
  <h2>
    <span>hello,react!</span>
  </h2><ul></ul>
</div> */

/* let h = <>
  <h2>
    <span>hello,react!</span>
  </h2><ul></ul>
</> */

/* let h = <React.Fragment>
  <h2>
    <span>hello,react!</span>
  </h2><ul></ul>
</React.Fragment> */


// 方法二 函数
/* function createH () {
  return <React.Fragment>
    <h2><span>hello</span></h2><ul></ul>
  </React.Fragment>
} */


// 方法三 数组
// 数组必须有key值，是做性能优化的，可以复用你的代码
let arr = [
  <h2 key="123"><span>hello</span></h2>,
  <ul key="456"></ul>
]


// console.log(h); // 用来描述UI信息

ReactDOM.render(
  // h,
  // createH(),
  arr,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
