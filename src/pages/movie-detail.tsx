import React from 'react';
import { useSelector } from 'react-redux';
import { RouteComponentProps } from "react-router-dom";
import { getMovieById } from '../redux/movie/movie.selectors';



interface Movie extends RouteComponentProps<any> {
}

const MovieDetails: React.FC<Movie> = (props) => {
  
  const itemId = props.match.params.movieId;
  const movieDetails = useSelector((state) => getMovieById(state, itemId));

  return (
    <div>
      <h1>{movieDetails.title}</h1>
      <p>
        <strong>Release date:</strong> {movieDetails.release_date}
      </p>
      <p>
        <strong>Overview:</strong> {movieDetails.overview}
      </p>
      <p>
        <strong>Poster:</strong> 
        <img 
          alt={movieDetails.title}
          src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${movieDetails.poster_path}`} 
        />
      </p>
      <p>
        <strong>Vote average:</strong> {movieDetails.vote_average}
      </p>
    </div>
  );
}

export default MovieDetails;
