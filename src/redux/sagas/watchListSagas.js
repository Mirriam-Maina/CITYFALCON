import { takeLatest, call, put } from 'redux-saga/effects';

import Service from '../../services';
import { watchListTypes } from '../actions/watchlistActions';
import { getWatchListFailure, getWatchListSuccess } from '../actions/watchlistActions';


export function* getWatchListSaga() {
  try {
    const response = yield call(Service.get);
    yield put(getWatchListSuccess(response))
  } catch (error) {
    yield put(getWatchListFailure(error));
  }
};

export function* watchgetWatchlist() {
  yield takeLatest(watchListTypes.GET_WATCHLIST_REQUEST, getWatchListSaga);
};
