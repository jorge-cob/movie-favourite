import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/home-page';
import FavouritePage from './pages/favourite-page';
import movieDetail from './pages/movie-detail';

import './App.css';
import Header from './components/header/header';

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/favourites' component={FavouritePage} />
        <Route exact path='/:movieId' component={movieDetail} />
      </Switch>
    </div>
  );
}

export default App;
