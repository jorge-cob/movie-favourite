import React from 'react';

import { Card } from '../card/card';

interface Movie {
  title: string;
  releaseDate: string;
  overview: string;
  posterPath: string;
  id: number;
}

interface MovieListProps {
  movies: Movie[];
}

export const CardList = ({movies}: MovieListProps) => (
  <div className='card-list'>
    {movies.map(movie => (
      <Card key={movie.id} movieDetails={movie} />
    ))}
  </div>
);
