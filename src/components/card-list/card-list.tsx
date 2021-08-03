import React from 'react';
import Card from '../card/card';

interface Movie {
  title: string;
  release_date: string;
  overview: string;
  poster_path: string;
  id: number;
}

interface MovieListProps {
  movies: Movie[];
}

const containerStyles: Object = {
  margin: '0 auto',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr',
  gridGap: '20px',
  marginBottom: '40px'
}


export const CardList = ({movies}: MovieListProps) => {
  return (
    <div style={containerStyles}>
      {movies.map(movie => (
        <Card movieDetails={movie} key={movie.id}/>
      ))}
    </div>
  );
};
