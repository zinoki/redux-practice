import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { combineReducers, createStore } from 'redux';

const productsReducer = (state=[], action) => {
  return state;
};

const userReducer = (state = '', action) => {
  return state;
}

const allReducers = combineReducers({
  products: productsReducer,
  user: userReducer
})

const store = createStore(allReducers, {
  products: [{ name: 'iPhone' }],
  user: 'Michael'
}); 

console.log(store.getState());



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
