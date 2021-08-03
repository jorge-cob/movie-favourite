import React from 'react';
import { useSelector } from 'react-redux';
import { RouteComponentProps } from "react-router-dom";
import { getMovieById } from '../redux/movie/movie.selectors';
import { DetailContainer } from './movie-detail.styles';



interface Movie extends RouteComponentProps<any> {
}

const MovieDetails: React.FC<Movie> = (props) => {
  
  const itemId = props.match.params.movieId;
  const movieDetails = useSelector((state) => getMovieById(state, itemId));

  return (
    <DetailContainer>
      <div className='header'>
        <h1>{movieDetails.title}</h1>
      </div>
      <div className='content-container'>
        <div className='image-container'>
          <div 
            className='background-image'
            style={{
              backgroundImage: `url(https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movieDetails.poster_path})`
            }}
          />
        </div>
        <div className='content'>
          <p>
            <strong>Release date:</strong> {movieDetails.release_date}
          </p>
          <p>
            <strong>Overview:</strong> {movieDetails.overview}
          </p>
          <p>
            <strong>Vote average:</strong> {movieDetails.vote_average}
          </p>
        </div>
      </div>
    </DetailContainer>
  );
}

export default MovieDetails;
