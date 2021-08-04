import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RouteComponentProps } from "react-router-dom";
import DetailView from '../components/detail-view/detail-view';
import { fetchedMovies } from '../redux/movie/movie.selectors';
import WithSpinner from '../components/with-spinner/with-spinner';
import { fetchMovieDetailStart } from '../redux/movie/movie.actions';

const MovieDetailWithSpinner = WithSpinner(DetailView);

interface MovieProps {
  selectedMovie: any[];
  isFetching: boolean;
}

interface MovieMatch extends RouteComponentProps<any> {}

const MovieDetails: React.FC<MovieMatch> = (props) => {
  const dispatch = useDispatch();
  const itemId = props.match.params.movieId;
  const { selectedMovie, isFetching }: MovieProps  = useSelector(fetchedMovies);
  useEffect(() => {
    dispatch(fetchMovieDetailStart(itemId));
  }, []);

  return (
    <MovieDetailWithSpinner isLoading={isFetching} movie={selectedMovie} />
  );
}

export default MovieDetails;
