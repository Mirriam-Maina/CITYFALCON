import { takeLatest, call, put } from 'redux-saga/effects';

import Service from '../../services';
import watchListTypes from '../actions/watchlistActions';
import { getWatchList, getWatchListFailure, getWatchListSuccess } from '../actions/watchlistActions';


export const getWatchListSaga = () => function* ({
}) {
  try {
    const response = yield call(Service.get('https://www.dropbox.com/s/kyumbzcqqy3u367/stories.json?dl=0'));
    console.log(response);
    response ? yield put(getWatchListSuccess(response)) : yield put(getWatchList());
  } catch (error) {
    yield put(getWatchListFailure(response));
  }
};

export const watchgetWatchlist = () => function* () {
  yield takeLatest(watchListTypes.GET_WATCHLIST_SUCCESS, getWatchListSaga);
};
