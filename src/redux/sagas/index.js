import { all } from 'redux-saga/effects';
import { watchgetWatchlist, getWatchListSaga } from './watchListSagas';

function* rootSaga() {
    yield all([
        getWatchListSaga(),
        watchgetWatchlist()
    ])
}

export default rootSaga;