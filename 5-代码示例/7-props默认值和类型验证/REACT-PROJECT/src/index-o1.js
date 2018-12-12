import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

// import List from './components/list'

function CreateH(props){
  return <h2>
    <span>{props.title || '123'}</span>
  </h2>
}

ReactDOM.render(
<div>
    <CreateH title={0}/>
    <CreateH title={'0'}/>
</div>,
document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
