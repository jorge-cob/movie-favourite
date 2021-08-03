import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { History, LocationState } from 'history';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavourites, removeFromFavourites } from '../../redux/movie/movie.actions';
import { movieIsFavourite } from '../../redux/movie/movie.selectors';

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


const imageStyles: Object = {
  width: '20vw',
  height: '30vw',
}

const Card = ({movieDetails, history}: MovieDetails1) => {
  const { title, release_date, overview, poster_path, id } = movieDetails;
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
    <div onClick={() => history.push(`/${id}`)}>
      { poster_path ?
        <img
          style={imageStyles}
          alt='movie'
          src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${poster_path}`}
        />
        :
        <div style={imageStyles}>
          No image available
        </div>
      }
      <div style={{display: 'flex', flexDirection: 'column', width: '20vw'}}>
        <h2> {title} </h2>
        <p> {release_date} </p>
        <p> {overview} </p>
        <button onClick={isFavourite ? event => handleRemoveFromFavourites(event) : event => handleAddToFavourites(event)}>
          {isFavourite ? 'Remove from favourites' : 'Add to favourites'}
        </button>
      </div>
    </div>
  );
};

export default withRouter(Card);
