import {
  fetchMoviesStart,
  fetchMoviesSuccess,
  fetchMoviesFailure,
  removeFromFavourites,
  addToFavourites,
  fetchMovieDetailStart,
  fetchMovieDetailSuccess,
  fetchMovieDetailFailure
} from './movie.actions';



const mockMovies = [
  {
    id: '522',
    title: 'Titanic',
    release_date: '1991-04-1',
    vote_average: '7.8',
    poster_path: 'http://fakeroute.com/titanic.jpg',
    overview: 'Wow, Jack, dont sink!',
  },
  {
    id: '362',
    title: 'Spider Man',
    release_date: '1976-04-12',
    vote_average: '7.8',
    poster_path: 'http://fakeroute.com/spide.jpg',
    overview: 'Wow, Jack, dont sink!',
  },
];

const mockMovie = {
  id: '522',
  title: 'Titanic',
  release_date: '1991-04-1',
  vote_average: '7.8',
  poster_path: 'http://fakeroute.com/titanic.jpg',
  overview: 'Wow, Jack, dont sink!',
};

describe('fetchMoviesStart action', () => {
  it('should create the fetchMoviesStart action', () => {
    const mockSearchText = 'wadus'
    const action = fetchMoviesStart(mockSearchText);
    expect(action.type).toEqual('FETCH_MOVIES_START');
    expect(action.searchText).toEqual(mockSearchText);
  });
});

describe('fetchMoviesSuccess action', () => {
  it('should create the fetchMoviesSuccess action', () => {
    const action = fetchMoviesSuccess(mockMovies);
    expect(action.type).toEqual('FETCH_MOVIES_SUCCESS');
    expect(action.movies).toEqual(mockMovies);
  });
});

describe('fetchMoviesFailure action', () => {
  it('should create the fetchMoviesFailure action', () => {
    const mockErrorMessage = 'Error while fetching movies';
    const action = fetchMoviesFailure(mockErrorMessage);
    expect(action.type).toEqual('FETCH_MOVIES_FAILURE');
    expect(action.error).toEqual(mockErrorMessage);
  });
});

describe('removeFromFavourites action', () => {
  it('should create the removeFromFavourites action', () => {
    const mockId = '522';
    const action = removeFromFavourites(mockId);
    expect(action.type).toEqual('REMOVE_FROM_FAVOURITES');
    expect(action.id).toEqual(mockId);
  });
});

describe('addToFavourites action', () => {
  it('should create the addToFavourites action', () => {
    const action = addToFavourites(mockMovie);
    expect(action.type).toEqual('ADD_TO_FAVOURITES');
    expect(action.movieDetails).toEqual(mockMovie);
  });
});

describe('fetchMovieDetailStart action', () => {
  it('should create the fetchMovieDetailStart action', () => {
    const mockId = '522'

    const action = fetchMovieDetailStart(mockId);
    expect(action.type).toEqual('FETCH_MOVIE_DETAIL_START');
    expect(action.id).toEqual(mockId);
  });
});

describe('fetchMovieDetailSuccess action', () => {
  it('should create the fetchMovieDetailSuccess action', () => {
    const action = fetchMovieDetailSuccess(mockMovie);
    expect(action.type).toEqual('FETCH_MOVIES_DETAIL_SUCCESS');
    expect(action.movie).toEqual(mockMovie);
  });
});

describe('fetchMovieDetailFailure action', () => {
  it('should create the fetchMovieDetailFailure action', () => {
    const mockErrorMessage = 'Error while fetching movie detail';
    const action = fetchMovieDetailFailure(mockErrorMessage);
    expect(action.type).toEqual('FETCH_MOVIES_DETAIL_FAILURE');
    expect(action.error).toEqual(mockErrorMessage);
  });
});
