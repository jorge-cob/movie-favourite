import React from 'react';
import { DetailContainer } from './detail-view.styles';



interface Movie {
  movie: {
    id: string;
    title: string;
    description: string;
    release_date: string;
    vote_average: string;
    poster_path: string;
    overview: string;
  } 
}

const DetailView: React.FC<Movie> = ({movie}) => {

  return (
    <DetailContainer>
      <div className='header'>
        <h1>{movie.title}</h1>
      </div>
      <div className='content-container'>
        <div className='image-container'>
          <div 
            className='background-image'
            style={{
              backgroundImage: `url(https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path})`
            }}
          />
        </div>
        <div className='content'>
          <p>
            <strong>Release date:</strong> {movie.release_date}
          </p>
          <p>
            <strong>Overview:</strong> {movie.overview}
          </p>
          <p>
            <strong>Vote average:</strong> {movie.vote_average}
          </p>
        </div>
      </div>
    </DetailContainer>
  );
}

export default DetailView;
