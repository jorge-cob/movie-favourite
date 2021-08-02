import React from 'react';


interface MovieDetails2 {
  movieDetails: {
    title: string;
    releaseDate: string;
    overview: string;
    posterPath: string;
  }
};

export const Card = ( {movieDetails: { title, releaseDate, overview, posterPath }}: MovieDetails2) => (
  <div className='card-container'>
    <img
      alt='monster'
      src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${posterPath}`}
    />
    <h2> {title} </h2>
    <p> {releaseDate} </p>
    <p> {overview} </p>
  </div>
);
