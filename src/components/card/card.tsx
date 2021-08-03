import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { History, LocationState } from 'history';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavourites, removeFromFavourites } from '../../redux/movie/movie.actions';
import { movieIsFavourite } from '../../redux/movie/movie.selectors';
import { CardItem } from './card.styles';

interface MovieDetails1 extends RouteComponentProps<any> {
  movieDetails: {
    title: string;
    release_date: string;
    overview: string;
    poster_path: string;
    id: string;
  },
  history: History<LocationState>;
}



const Card = ({movieDetails, history}: MovieDetails1) => {
  const { title, release_date, poster_path, id } = movieDetails;
  const dispatch = useDispatch();
  const isFavourite = useSelector(state => movieIsFavourite(state, id));
  function handleAddToFavourites(event: any) {
    event.stopPropagation();
    dispatch(addToFavourites(movieDetails));
  }
  function handleRemoveFromFavourites(event: any) {
    event.stopPropagation();
    dispatch(removeFromFavourites(id));
  }
  return (
    <CardItem onClick={() => history.push(`/${id}`)}>
      { poster_path ?
        <div
          className='background-image'
          style={{
            backgroundImage: `url(https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${poster_path})`
          }}
        />
  
        :
        <div
          className='background-image'
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)`,
            opacity: 0.5,
          }}
        />
      }
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>{release_date}</span>
        <button onClick={isFavourite ? event => handleRemoveFromFavourites(event) : event => handleAddToFavourites(event)}>
          {isFavourite ? 'Remove from favourites' : 'Add to favourites'}
        </button>
      </div>
    </CardItem>
  );
};

export default withRouter(Card);
