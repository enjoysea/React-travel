import React from 'react';
import ReactDOM from 'react-dom';

// serviceWorker主要作用：应用离线也能访问，并且加载的快一点
import * as serviceWorker from './serviceWorker';

/* let h = <h2>
  <span>hello,react!</span>
</h2> */

let span = React.createElement('span', null, 'hello,react!')
let h = React.createElement('h2',{className: 'red'}, span)

console.log(h); // 用来描述UI信息

ReactDOM.render(
  h,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
