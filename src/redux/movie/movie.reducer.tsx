import { MoviesAction } from './movie.actions';

interface MovieState {  
  movies: [],
  currentMoviesPages: number,
  currentSelectedPage: 0,
  isFetching: boolean,
  errorMessage: string,
  favorites: [],
  selectedMovie: Object
}


const INITIAL_STATE: MovieState = {  
  movies: [],
  currentMoviesPages: 0,
  currentSelectedPage: 0,
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
        movies: action.moviesQuery.results,
        currentMoviesPages: action.moviesQuery.total_pages,
        isFetching: false
      }
    case 'FETCH_MOVIES_FAILURE':
      return {
        ...state,
        isFetching: false,
        errorMessage: action.error,
        movies: []
      }
    case 'FETCH_MOVIES_DETAIL_FAILURE':
      return {
        ...state,
        isFetching: false,
        errorMessage: action.error,
        movie: []
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
