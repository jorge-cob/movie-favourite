
export interface MoviesData {
  movies: string[];
}

export interface MovieDetailData {
  movie: string[];
}

export type MoviesAction =
  | { type: 'FETCH_MOVIES_START'; searchText: string }
  | { type: 'FETCH_MOVIES_SUCCESS'; movies: MoviesData }
  | { type: 'FETCH_MOVIES_FAILURE'; error: string }
  | { type: 'REMOVE_FROM_FAVOURITES'; id: string }
  | { type: 'ADD_TO_FAVOURITES'; movieDetails: Object }
  | { type: 'FETCH_MOVIE_DETAIL_START'; id: string }
  | { type: 'FETCH_MOVIES_DETAIL_SUCCESS'; movie: MovieDetailData }
  | { type: 'FETCH_MOVIES_DETAIL_FAILURE'; error: string };


export function fetchMoviesStart(searchText: string): MoviesAction {
  return { type: 'FETCH_MOVIES_START', searchText };
}

export function fetchMoviesSuccess(movies: MoviesData): MoviesAction {
  return { type: 'FETCH_MOVIES_SUCCESS', movies };
}

export function fetchMoviesFailure(error: string): MoviesAction {
  return { type: 'FETCH_MOVIES_FAILURE', error };
}

export function removeFromFavourites(id: string): MoviesAction {
  return { type: 'REMOVE_FROM_FAVOURITES', id };
}

export function addToFavourites(movieDetails: Object): MoviesAction {
  return { type: 'ADD_TO_FAVOURITES', movieDetails };
}

export function fetchMovieDetailStart(id: string): MoviesAction {
  return { type: 'FETCH_MOVIE_DETAIL_START', id };
}

export function fetchMovieDetailSuccess(movie: MovieDetailData): MoviesAction {
  return { type: 'FETCH_MOVIES_DETAIL_SUCCESS', movie };
}

export function fetchMovieDetailFailure(error: string): MoviesAction {
  return { type: 'FETCH_MOVIES_DETAIL_FAILURE', error };
}