import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { fetchTodos } from './actions/todo_actions';
import Root from './components/root';
import * as TodoApiUtil from './util/todo_api_util'

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = localStorage.state ?
    JSON.parse(localStorage.state) : {};
  const store = configureStore(preloadedState);

  window.TodoApiUtil = TodoApiUtil;
  window.store = store;
  window.fetchTodos = fetchTodos;

  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, root);
});
