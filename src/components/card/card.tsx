import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { History, LocationState } from 'history';

interface MovieDetails1 extends RouteComponentProps<any> {
  movieDetails: {
    title: string;
    release_date: string;
    overview: string;
    poster_path: string;
    id: number;
  },
  history: History<LocationState>;
}


const imageStyles: Object = {
  width: '20vw',
  height: '30vw',
}

const Card = ({movieDetails: { title, release_date, overview, poster_path, id }, history}: MovieDetails1) => (
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
    </div>
  </div>
);

export default withRouter(Card);
