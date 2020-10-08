import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';

const Home: React.FC = () => (
  <>
    <Header />
    <h1>Movies Cenas</h1>
    <Link to="/movie-detail">Detail</Link>
  </>
);

export default Home;
