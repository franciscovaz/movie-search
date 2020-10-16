import { all } from 'redux-saga/effects';
import movies from './movies/moviesSagas';

export default function* rootSaga() {
  return yield all([movies]);
}
