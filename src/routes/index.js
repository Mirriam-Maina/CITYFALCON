import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import './App.scss';
import { routes } from './routes';
import Header from '../components/Header/Header';
import CardView from  '../views/CardsView';


export const Home = () => {
  return (
    <div className="App">
      <Header />
      <div className='card-container'>
      <div className='heading-title'>Watchlist</div>
      <CardView />
      </div>
    </div>
  );
}

const App = () => (
  <BrowserRouter>
        <Switch>
    <Route path="/"  exact component={Home} />
          {
            Object.keys(routes).map((route) => {
              return (
                <Route
                  path={route.path}
                  key={route.key}
                  exact
                  component={route.component}
                />
              );
            })
          }
    </Switch>
  </BrowserRouter>
);

export default App;
