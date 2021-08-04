import React from 'react';
import Card from '../card/card';

interface Movie {
  title: string;
  release_date: string;
  overview: string;
  poster_path: string;
  id: string;
}

interface Props {
  movies: Movie[];
  onCardClick: (id: string) => void;
}

const containerStyles: Object = {
  margin: '0 auto',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr',
  gridGap: '20px',
  marginBottom: '40px'
}


export const CardList = ({movies, onCardClick}: Props) => {
  return (
    movies.length > 0 ?(
      <div style={containerStyles}>
        {movies.map(movie => (
          <Card movieDetails={movie} onClick={onCardClick} key={movie.id}/>
        ))}
      </div>
    ) : (
      <div> No movies to show! Go ahead and search </div>
    )
  );
};
