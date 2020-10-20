import { all, call, put, takeLatest } from 'redux-saga/effects';

import { AxiosResponse } from 'axios';
import {
  addMoviesSearchedRequest,
  addMoviesSearchedSuccess,
  addMoviesSearchedFailure,
} from './moviesActions';

import { ActionTypes, IApiResponse } from './moviesTypes';
import api from '../../../services/api';

type GetMoviesSearched = ReturnType<typeof addMoviesSearchedRequest>;

function* getMoviesSearched({ payload }: GetMoviesSearched) {
  const apiResponse: AxiosResponse<IApiResponse> = yield call(
    api.get,
    `?apikey=${process.env.REACT_APP_API_OMDb_SECRET}&s=${payload.movieName}`,
  );

  if (apiResponse.data.Response === 'True') {
    yield put(addMoviesSearchedSuccess(apiResponse.data));
  } else {
    yield put(addMoviesSearchedFailure());
  }
}

export default all([
  takeLatest(ActionTypes.addMoviesSearchedRequest, getMoviesSearched),
]);
