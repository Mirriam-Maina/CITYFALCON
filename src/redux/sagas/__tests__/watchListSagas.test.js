import { call } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';
import {throwError} from 'redux-saga-test-plan/providers';
import { watchgetWatchlist } from '../watchListSagas';
import Service from '../../../services';
import { watchListTypes } from '../../actions/watchlistActions';



describe('Test Watchlist saga', () => {
  it('gets a response with watchlist items and dispatches GET_WATCHLIST_SUCCESS', () => {
    const response = [];
    return expectSaga(watchgetWatchlist)
      .provide([[call(Service.get), response]])
      .put({
        type: watchListTypes.GET_WATCHLIST_SUCCESS,
        response: response
      })
      .dispatch({
        type: watchListTypes.GET_WATCHLIST_REQUEST
      })
      .silentRun();
  });

  it('handles an error', () => {
    const error = 'error occurres'
    return expectSaga(watchgetWatchlist)
      .provide([[call(Service.get), throwError(error)]])
      .put({
        type: watchListTypes.GET_WATCHLIST_FAILURE,
        response: error
      })
      .dispatch({
        type: watchListTypes.GET_WATCHLIST_REQUEST
      })
      .silentRun();
  });

});

