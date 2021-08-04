import movieReducer from './movie.reducer';

const initialState = {
  movies: [],
  isFetching: false,
  errorMessage: '',
  favorites: [],
  selectedMovie: {}
};

const initialStateWithFavorite = {
  movies: [],
  isFetching: false,
  errorMessage: '',
  favorites: [
    {
      id: '522',
      title: 'Titanic',
      release_date: '1991-04-1',
      vote_average: '7.8',
      poster_path: 'http://fakeroute.com/titanic.jpg',
      overview: 'Wow, Jack, dont sink!',
    },
  ],
  selectedMovie: {}
};

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

describe('movieReducer', () => {
  it('should return initial state', () => {
    expect(movieReducer(undefined, {})).toEqual(initialState);
  });

  it('should toggle isFetching to true on fetchMoviesStart action', () => {
    expect(
      movieReducer(initialState, {
        type: 'FETCH_MOVIES_START',
      }).isFetching
    ).toBe(true);
  });
  it('should toggle isFetching to true on fetchMovieDetailStart action', () => {
    expect(
      movieReducer(initialState, {
        type: 'FETCH_MOVIE_DETAIL_START',
      }).isFetching
    ).toBe(true);
  });

  it('should receive movie array and put it into state and toggle isFetching to false', () => {
    expect(
      movieReducer(initialState, {
        type: 'FETCH_MOVIES_SUCCESS',
        movies: mockMovies
      }).movies.length
    ).toBe(2);
    expect(
      movieReducer(initialState, {
        type: 'FETCH_MOVIES_SUCCESS',
        movies: mockMovies
      }).isFetching
    ).toBe(false);
  });


  it('should receive error when fetching movies, put error and toggle isFetching to false', () => {
    expect(
      movieReducer(initialState, {
        type: 'FETCH_MOVIES_FAILURE',
        errorMessage: 'Error fetching movies'
      }).movies.length
    ).toBe(0);
    expect(
      movieReducer(initialState, {
        type: 'FETCH_MOVIES_FAILURE',
        errorMessage: 'Error fetching movies'
      }).isFetching
    ).toBe(false);
  });

  it('should receive error when fetching movie details, put error and toggle isFetching to false', () => {
    expect(
      movieReducer(initialState, {
        type: 'FETCH_MOVIES_DETAIL_FAILURE',
        errorMessage: 'Error fetching movies'
      }).selectedMovie
    ).toMatchObject({});
    expect(
      movieReducer(initialState, {
        type: 'FETCH_MOVIES_DETAIL_FAILURE',
        errorMessage: 'Error fetching movies'
      }).isFetching
    ).toBe(false);
  });


  it('should receive movie details and put it into state and toggle isFetching to false', () => {
    expect(
      movieReducer(initialState, {
        type: 'FETCH_MOVIES_DETAIL_SUCCESS',
        movie: mockMovie
      }).selectedMovie
    ).toMatchObject(mockMovie);
    expect(
      movieReducer(initialState, {
        type: 'FETCH_MOVIES_DETAIL_SUCCESS',
        movie: mockMovie
      }).isFetching
    ).toBe(false);
  });

  it('should add object to favourites in state', () => {
    expect(
      movieReducer(initialState, {
        type: 'ADD_TO_FAVOURITES',
        movieDetails: mockMovies
      }).favorites.length
    ).toBe(1);
  });
  it('should remove object from favourites in state', () => {
    expect(
      movieReducer(initialStateWithFavorite, {
        type: 'REMOVE_FROM_FAVOURITES',
        id: '522'
      }).favorites.length
    ).toBe(0);
  });
});
