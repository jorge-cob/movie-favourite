import { MoviesAction } from './movie.actions';

interface MovieState {  
  movies: string[],
  isFetching: boolean,
  errorMessage: string
}


const INITIAL_STATE: MovieState = {  
  movies: [],
  isFetching: false,
  errorMessage: ''
}

const movieReducer = (state = INITIAL_STATE, action: MoviesAction) => {
  switch (action.type) {
    case 'FETCH_MOVIES_START':
      return {
        ...state,
        isFetching: true
      }
    case 'FETCH_MOVIES_SUCCESS':
      return {
        ...state,
        movies: action.movies,
        isFetching: false
      }
    case 'FETCH_MOVIES_FAILURE':
      return {
        ...state,
        isFetching: false,
        errorMessage: action.error
      }
    default:
      return state;
  }
};

export default movieReducer;