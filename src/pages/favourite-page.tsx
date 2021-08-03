import React from 'react';
import { useSelector } from 'react-redux';

import { CardList } from '../components/card-list/card-list';

import { fetchedMovies } from '../redux/movie/movie.selectors';


interface Movies {
  movies: any[];
  favorites: any[];
  isFetching: boolean;
}

const FavouritePage = () => {
  const { favorites }: Movies  = useSelector(fetchedMovies); 
  return (
    <div className='App'>
      <h1>Movie Database</h1>
      <CardList movies={favorites}/>
    </div>
  );
}

export default FavouritePage;
