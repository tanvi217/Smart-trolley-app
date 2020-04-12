import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

console.disableYellowBox = true;

class App extends Component {
  componentWillMount() {
    if (!firebase.apps.length) {
      const firebaseConfig = {
        apiKey: 'AIzaSyDuKHanEtKBVYKMedho6vYN0mtqO8j5_e8',
        authDomain: 'manager-fd534.firebaseapp.com',
        databaseURL: 'https://manager-fd534.firebaseio.com',
        projectId: 'manager-fd534',
        storageBucket: 'manager-fd534.appspot.com',
        messagingSenderId: '1086471820239',
        appId: '1:1086471820239:web:a4af1dca364f5553e838ba',
        measurementId: 'G-D13TWC2RBT',
      };
      firebase.initializeApp(firebaseConfig);
    }
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
