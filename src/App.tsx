import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/home-page';
import movieDetail from './pages/movie-detail';

import './App.css';


function App() {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/:movieId' component={movieDetail} />
    </Switch>
  );
}

export default App;
