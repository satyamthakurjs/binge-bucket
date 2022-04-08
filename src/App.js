import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Home from './pages/Home';
import Show from './pages/Show';
import Starred from './pages/Starred';

const theme = {
  mainColors: {
    blue: '#1167b1',
    gray: '#2a9df4',
    dark: '#353535',
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/starred">
          <Starred />
        </Route>

        <Route exact path="/show/:id">
          <Show />
        </Route>

        <Route>
          <div>404 Not Found</div>
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
