import React from 'react';
import './App.css';
import Home from './components/Home'

import {Provider} from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
    <div className="App">
      <h1>Lyrics Mismatch App</h1>
      <Home />
    </div>
    </Provider>
  );
}

export default App;
