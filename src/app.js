import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import Page from './components/page';

const App = () => {

  return (
    <Page>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Page>
  );
};

export default App;