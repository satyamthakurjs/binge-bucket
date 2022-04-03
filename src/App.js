import React from 'react';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        This is homepage
      </Route>

      <Route exact path="/starred">
        This is starred
      </Route>

      <Route>404 Page Not Found</Route>
    </Switch>
  );
}

export default App;
