import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import Counter from './counter';
import counter from './reducer';

const store = createStore(counter);
const root = document.getElementById('root');

const render = () => ReactDOM.render(
    <Counter
    value={store.getState()}
    onIncrement={()=>store.dispatch({type:'INCREMENT'})}
    onDecrement={()=>store.dispatch({type:'DECREMENT'})}
    />,
    root
)

render();
store.subscribe(render);