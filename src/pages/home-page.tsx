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
  movies: [];
  favorites: [];
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
    <>
      <h1>Movie database</h1>
      <SearchBox onSearchChange={onSearchChange} onSearchClick={onSearchClick} />
      <MovieListWithSpinner isLoading={isFetching} movies={movies} onCardClick={onCardClick}/>
    </>
  );
}

export default HomePage;
