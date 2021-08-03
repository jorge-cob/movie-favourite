
export interface MoviesData {
  movies: string[];
}

export type MoviesAction =
  | { type: 'FETCH_MOVIES_START'; searchText: string }
  | { type: 'FETCH_MOVIES_SUCCESS'; movies: MoviesData }
  | { type: 'FETCH_MOVIES_FAILURE'; error: string }
  | { type: 'REMOVE_FROM_FAVOURITES'; id: string }
  | { type: 'ADD_TO_FAVOURITES'; id: string };


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

export function addToFavourites(id: string): MoviesAction {
  return { type: 'ADD_TO_FAVOURITES', id };
}