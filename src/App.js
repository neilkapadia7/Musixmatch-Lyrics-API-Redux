import React from 'react';
import './App.css';
import Home from './components/Home';
import Lyrics from './components/Lyrics/Lyrics';
import Navbar from './components/Layout/Navbar';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {Provider} from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
         <div className='body'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path={`/lyrics/:id`} component={Lyrics}/>
          </Switch>
         </div>
      </Router>
    </Provider>
  );
}

export default App;
