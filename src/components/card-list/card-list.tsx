import React from 'react';
import Card from '../card/card';
import Pagination from '../pagination/pagination';

interface Movie {
  title: string;
  release_date: string;
  overview: string;
  poster_path: string;
  id: string;
}

interface Props {
  movies: Movie[];
  currentMoviesPages: number;
  onCardClick: (id: string) => void;
}

const containerStyles: Object = {
  margin: '0 auto',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr',
  gridGap: '20px',
  marginBottom: '40px'
}


export const CardList = ({movies, onCardClick, currentMoviesPages}: Props) => {
  return (
    movies.length > 0 ?(
      <div style={containerStyles}>
        {movies.map(movie => (
          <Card movieDetails={movie} onClick={onCardClick} key={movie.id}/>
        ))}
        <Pagination currentMoviesPages={currentMoviesPages} />
      </div>
    ) : (
      <div> No movies to show! Go ahead and search </div>
    )
  );
};
