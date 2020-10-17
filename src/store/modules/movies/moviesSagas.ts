import { all, call, put, takeLatest } from 'redux-saga/effects';

import { AxiosResponse } from 'axios';
import {
  addMoviesSearchedRequest,
  addMoviesSearchedSuccess,
} from './moviesActions';

import { ActionTypes, IMovieResponseProps } from './moviesTypes';
import api from '../../../services/api';

type GetMoviesSearched = ReturnType<typeof addMoviesSearchedRequest>;

function* getMoviesSearched({ payload }: GetMoviesSearched) {
  const apiResponse: AxiosResponse<IMovieResponseProps> = yield call(
    api.get,
    `?apikey=${process.env.REACT_APP_API_OMDb_SECRET}&s=${payload.movieName}`,
  );

  if (apiResponse.data.Response === 'True') {
    console.log('Entrei', apiResponse.data);
    yield put(addMoviesSearchedSuccess(apiResponse.data));
  }
}

export default all([
  takeLatest(ActionTypes.addMoviesSearchedRequest, getMoviesSearched),
]);
