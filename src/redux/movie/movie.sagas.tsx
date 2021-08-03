import { takeLatest, call, put, all } from 'redux-saga/effects';
import axios from 'axios';
import {
  fetchMoviesSuccess,
  fetchMoviesFailure,
  fetchMovieDetailSuccess,
  fetchMovieDetailFailure
} from './movie.actions';

const API_KEY = '33c34cc56864062265b1dc6fa5d28414';
function fetchMoviesApi({searchText}: any) {
  return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchText}`)
    .then(response => ({ response }))
    .catch(error => ({ error }))
}

function fetchMovieDetailApi({id}: any) {
  return axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
    .then(response => ({ response }))
    .catch(error => ({ error }))
}

export function* fetchMoviesAsync(payload: Object) {
  const { response, error } = yield call(fetchMoviesApi, payload);
  if (response) {
    yield put(fetchMoviesSuccess(response.data.results));
  } else {
    yield put(fetchMoviesFailure(error.message));

  }
};

export function* fetchMovieDetailAsync(payload: Object) {
  const { response, error } = yield call(fetchMovieDetailApi, payload);

  if (response) {
    yield put(fetchMovieDetailSuccess(response.data));
  } else {
    yield put(fetchMovieDetailFailure(error.message));

  }
};

export function* fetchMoviesStart() {
  yield takeLatest(
    'FETCH_MOVIES_START' as string,
    fetchMoviesAsync
  )
};

export function* fetchMovieDetailStart() {
  yield takeLatest(
    'FETCH_MOVIE_DETAIL_START' as string,
    fetchMovieDetailAsync
  )
};

export function* movieSagas() {
  yield all([
    call(fetchMoviesStart),
    call(fetchMovieDetailStart),
  ]);
};
