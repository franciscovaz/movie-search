import React from 'react';

import { Provider } from 'react-redux';

import GlobalStyle from './styles/global';
import Routes from './pages/routes';
import store from './store';

const App: React.FC = () => (
  <Provider store={store}>
    <GlobalStyle />
    <Routes />
  </Provider>
);

export default App;
