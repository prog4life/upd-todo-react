import {Provider} from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import {hashHistory} from 'react-router';

import * as actions from 'actions';
import firebase from 'app/firebase/';
import router from 'app/router/';
var store = require('configureStore').configure();

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(actions.login(user.uid));
    store.dispatch(actions.startGetTodos()); // add @firebase todos to store
    hashHistory.push('/todos');
  } else {
    store.dispatch(actions.logout());
    if (hashHistory.getCurrentLocation().pathname !== '/') {
      hashHistory.push('/');
    }
  }
});

store.subscribe(() => {
  console.log('New state: ', store.getState());
});

// Load foundation
$(document).foundation();

// App styles
import 'applicationStyles';

ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app')
);
