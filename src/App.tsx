import React from 'react';

import GlobalStyle from './styles/global';
import Routes from './pages/routes';

const App: React.FC = () => (
  <>
    <Routes />
    <GlobalStyle />
  </>
);

export default App;
