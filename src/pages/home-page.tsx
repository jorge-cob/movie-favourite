import React, { useState } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { History, LocationState } from 'history';

import { CardList } from '../components/card-list/card-list';
import { SearchBox } from '../components/search-box/search-box';
import WithSpinner from '../components/with-spinner/with-spinner';

import { fetchMoviesStart } from '../redux/movie/movie.actions';
import { fetchedMovies } from '../redux/movie/movie.selectors';


const MovieListWithSpinner = WithSpinner(CardList);

interface Movies {
  movies: any[];
  favorites: any[];
  isFetching: boolean;
}

interface HistoryProps extends RouteComponentProps<any> {
  history: History<LocationState>;
}

const HomePage = ({history}: HistoryProps) => {
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
  function onCardClick(id: string) {
    history.push(`/${id}`);
  }

  return (
    <div className='App'>
      <h1>Movie Database</h1>
      <SearchBox onSearchChange={onSearchChange} onSearchClick={onSearchClick} />
      <button onClick={() => history.push('/favourites')}>See my favourite movies</button>
      <MovieListWithSpinner isLoading={isFetching} movies={movies} onCardClick={onCardClick}/>
    </div>
  );
}

export default HomePage;
