import React, { useState } from 'react';
import {  useDispatch, useSelector } from 'react-redux';

import { CardList } from '../components/card-list/card-list';
import { SearchBox } from '../components/search-box/search-box';
import WithSpinner from '../components/with-spinner/with-spinner';

import { fetchMoviesStart } from '../redux/movie/movie.actions';
import { fetchedMovies } from '../redux/movie/movie.selectors';


const MovieListWithSpinner = WithSpinner(CardList);

interface Movies {
  movies: any[];
  isFetching: boolean;
}

const HomePage = () => {
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();
  const { movies, isFetching }: Movies  = useSelector(fetchedMovies);
  function onSearchChange(event: React.FormEvent<HTMLInputElement>) {
    let searchField = event.target as HTMLInputElement;
    setSearchText(searchField.value);
  };
  function onSearchClick() {
    dispatch(fetchMoviesStart(searchText));
  };

  return (
    <div className='App'>
      <h1>Movie Database</h1>
      <SearchBox onSearchChange={onSearchChange} onSearchClick={onSearchClick} />
      <MovieListWithSpinner isLoading={isFetching} movies={movies}/>
    </div>
  );
}

export default HomePage;
