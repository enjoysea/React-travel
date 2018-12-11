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

// 没有多余标签
/* let h = <>
 <h2>
 <span>hello,react!</span>
 </h2><ul></ul>
 </> */

// 没有多余标签
/* let h = <React.Fragment>
 <h2>
 <span>hello,react!</span>
 </h2><ul></ul>
 </React.Fragment> */

// 自写方法一
let lh = '我的名字是迈出旮旯看海'

// 方法二 函数
/* function createH () {
 return <React.Fragment>
 <h2><span>hello</span></h2><ul></ul>
 </React.Fragment>
 } */

// 自写方法二
function createH() {
  return '我的名字是enjoysea2'
}

// 方法三 数组
// 数组必须有key值，是做性能优化的，可以复用你的代码
/* let arr = [
 <h2 key="123"><span>hello</span></h2>,
 <ul key="456"></ul>
 ] */

let value = 'hello,react'
let data = [1, 2, 3, 4, 5, 6, 7]

let lis = data.map((item) => {
  // 以后最好直接拿id做key值
  return <li key={item}>{item}</li>
})

// 自写方法三
let myName = '我的名字是enjoysea'.split('').map((item) => {
  return <li key={item}>{item}</li>
})

let h = <React.Fragment>
  {/*应用自写方法一*/}
  <p>{lh}</p>
  {/*应用自写方法二*/}
  <h2>{createH()}</h2>
  {/*应用自写方法三*/}
  <ul>
    {myName}
  </ul>
  <h2 title={value}>
    <span>{value}</span><br/>
    <span>{1 + 1}</span><br/>
    <span>{true ? 1 : 90}</span><br/>
    <span>{[1, 2, 3].map((item) => item * 2)}</span><br/>
    <span>{1 > 2}</span><br/>
    <span>{String(true)}</span><br/>
    <span>{String(null)}</span><br/>
    <span>{String(undefined)}</span><br/>
  </h2>
  <ul>
    {lis}
  </ul>
  {/* 这才是注释 */}
  <ul>
    {
      data.map((item) => {
        // 以后最好直接拿id做key值
        return <li key={item}>{item}</li>
      })
    }
  </ul>
</React.Fragment>


// console.log(h); // 用来描述UI信息

ReactDOM.render(
  h,
  // createH(),
  // arr,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
