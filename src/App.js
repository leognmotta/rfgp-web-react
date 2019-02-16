import React, { Fragment } from 'react';
import Routes from './routes';
import GlobalStyle from './styles/global';
import Layout from './hoc/Layout/Layout';

const App = () => (
  <Layout>
    <Routes />
    <GlobalStyle />
  </Layout>
);
export default App;
