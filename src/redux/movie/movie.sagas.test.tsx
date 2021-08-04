import { takeLatest } from 'redux-saga/effects';

import { fetchMoviesAsync, fetchMovieDetailAsync, fetchMoviesStartApi, fetchMovieDetailStartApi} from './movie.sagas';

describe('fetch movies start saga', () => {
  it('should trigger on FETCH_MOVIES_START', () => {
    const generator = fetchMoviesStartApi();
    expect(generator.next().value).toEqual(
      takeLatest('FETCH_MOVIES_START', fetchMoviesAsync)
    );
  });
});

describe('fetch movie detail start saga', () => {
  it('should trigger on FETCH_MOVIE_DETAIL_START', () => {
    const generator = fetchMovieDetailStartApi();
    expect(generator.next().value).toEqual(
      takeLatest('FETCH_MOVIE_DETAIL_START', fetchMovieDetailAsync)
    );
  });
});
