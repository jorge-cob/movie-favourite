import React from 'react';
import { DetailContainer, ParagraphItem } from './detail-view.styles';


interface Movie {
  movie: {
    id: string;
    title: string;
    release_date: string;
    vote_average: string;
    poster_path: string;
    overview: string;
  },
}

const DetailView: React.FC<Movie> = ({movie}) => {
  const imagePath = movie.poster_path 
    ? `url(https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path})` 
    : `url(https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)`;
  
    return (
    <DetailContainer>

      <div className='content-container'>
        <div className='image-container'>
          <div 
            className='background-image'
            style={{
              backgroundImage: imagePath
            }}
          />
        </div>
        <div className='content'>
          <div className='header'>
            <h1>{movie.title}</h1>
          </div>
          <p>
            <strong>Release date:</strong> {movie.release_date}
          </p>
          <ParagraphItem>
            <strong>Overview:</strong> {movie.overview}
          </ParagraphItem>
          <p>
            <strong>Vote average:</strong> {movie.vote_average}
          </p>
        </div>
      </div>
    </DetailContainer>
  );
}

export default DetailView;
