import React from 'react';
import expect from 'expect';
import { Provider } from 'react-redux';
import { mount } from 'enzyme/build';
import configureStore  from 'redux-mock-store';
import rootSaga from '../../../redux/sagas/index';

import CardView from '../index';
import setupTests from '../../../services/setupTests';


const initialState = {
    loading: true,
    error: '',
    watchlist: [],
    openDrawerID: '',
    openDrawer: false,
    retrieveWatchList: jest.fn(),
    watchListReducer:{
        watchlist: []
    },
};

const store = configureStore(rootSaga)(initialState)


const setUp = () => {

  const wrapper = mount(
      <Provider store={store}>
            <CardView />
      </Provider>
);

  return {
    wrapper
  };
};

describe('Card view test', () => {

  });
