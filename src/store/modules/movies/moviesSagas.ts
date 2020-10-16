import { all, call, put, takeLatest } from 'redux-saga/effects';

import { AxiosResponse } from 'axios';
import {
  addMoviesSearchedRequest,
  addMoviesSearchedSuccess,
} from './moviesActions';

import { ActionTypes, IMovieProps } from './moviesTypes';
import api from '../../../services/api';

type GetMoviesSearched = ReturnType<typeof addMoviesSearchedRequest>;

function* getMoviesSearched({ payload }: GetMoviesSearched) {
  console.log('Entrei no saga!');

  const apiResponse: AxiosResponse<IMovieProps> = yield call(
    api.get,
    `?apikey=${process.env.REACT_APP_API_OMDb_SECRET}&s=${payload.movieName}`,
  );

  console.log('Resp: ', apiResponse.data);

  if (apiResponse.data) {
    yield put(addMoviesSearchedSuccess(apiResponse.data));
  }
}

export default all([
  takeLatest(ActionTypes.addMoviesSearchedRequest, getMoviesSearched),
]);
