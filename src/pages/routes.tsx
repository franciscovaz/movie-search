import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import Home from './Home';
import Movie from './Movie';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/movie-detail" component={Movie} />
    </BrowserRouter>
  );
};

export default Routes;
