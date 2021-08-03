import { MoviesAction } from './movie.actions';

interface MovieState {  
  movies: string[],
  isFetching: boolean,
  errorMessage: string,
  favorites: [],
  selectedMovie: Object
}


const INITIAL_STATE: MovieState = {  
  movies: [],
  isFetching: false,
  errorMessage: '',
  favorites: [],
  selectedMovie: {}
}

const movieReducer = (state = INITIAL_STATE, action: MoviesAction) => {
  switch (action.type) {
    case 'FETCH_MOVIES_START':
    case 'FETCH_MOVIE_DETAIL_START':
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
    case 'FETCH_MOVIES_DETAIL_FAILURE':
      return {
        ...state,
        isFetching: false,
        errorMessage: action.error
      }
    case 'ADD_TO_FAVOURITES':
      return {
        ...state,
        favorites: [...state.favorites, action.movieDetails]
      }
    case 'REMOVE_FROM_FAVOURITES':
      return {
        ...state,
        favorites: state.favorites.filter(favourite => favourite['id'] !== action.id)
      }
     
    case 'FETCH_MOVIES_DETAIL_SUCCESS':
      return {
        ...state,
        selectedMovie: action.movie,
        isFetching: false
      }
   
    default:
      return state;
  }
};

export default movieReducer;
