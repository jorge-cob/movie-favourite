import { takeLatest, call, put, all } from 'redux-saga/effects';
import axios from 'axios';
import {
  fetchMoviesSuccess,
  fetchMoviesFailure
} from './movie.actions';


function fetchMoviesApi({searchText}: any) {
  const API_KEY = '33c34cc56864062265b1dc6fa5d28414';
  return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchText}`)
    .then(response => ({ response }))
    .catch(error => ({ error }))
}

export function* fetchMoviesAsync(payload: Object) {
  yield console.log('I am fired');
  const { response, error } = yield call(fetchMoviesApi, payload);
  if (response) {
    yield console.log('response', response);
    yield put(fetchMoviesSuccess(response.data.results));
  } else {
    yield console.log('error', error);
    yield put(fetchMoviesFailure(error.message));

  }
};

export function* fetchMoviesStart() {
  yield takeLatest(
    'FETCH_MOVIES_START' as any,
    fetchMoviesAsync
  )
};

export function* movieSagas() {
  yield all([
    call(fetchMoviesStart)
  ]);
};
