import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => (
  <>
    <h1>Movies Cenas</h1>
    <Link to="/movie-detail">Detail</Link>
  </>
);

export default Home;
