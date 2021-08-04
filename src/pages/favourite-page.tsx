import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { History, LocationState } from 'history';
import { useSelector } from 'react-redux';

import { CardList } from '../components/card-list/card-list';

import { fetchedMovies } from '../redux/movie/movie.selectors';



interface Movies {
  movies: any[];
  favorites: any[];
  isFetching: boolean;
}

interface HistoryInterface extends RouteComponentProps<any> {
  history: History<LocationState>;
}

const FavouritePage = ({history}: HistoryInterface) => {
  const { favorites }: Movies  = useSelector(fetchedMovies);  

  function onCardClick(id: string) {
    history.push(`/${id}`);
  }
  return (
    <>
      <h1>My favourite movies</h1>
      <CardList movies={favorites} onCardClick={onCardClick} />
    </>
  );
}

export default FavouritePage;
