
export interface MoviesData {
  movies: string[];
}

export type MoviesAction =
  | { type: 'FETCH_MOVIES_START'; searchText: string }
  | { type: 'FETCH_MOVIES_SUCCESS'; movies: MoviesData }
  | { type: 'FETCH_MOVIES_FAILURE'; error: string };



export function fetchMoviesStart(searchText: string): MoviesAction {
  return { type: 'FETCH_MOVIES_START', searchText };
}

export function fetchMoviesSuccess(movies: MoviesData): MoviesAction {
  return { type: 'FETCH_MOVIES_SUCCESS', movies };
}

export function fetchMoviesFailure(error: string): MoviesAction {
  return { type: 'FETCH_MOVIES_FAILURE', error };
}