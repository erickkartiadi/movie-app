import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Movies from './pages/Movies';
import MovieDetails from './pages/MovieDetails';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Movies />
        </Route>
        <Route exact path="/movies/:imdbID">
          <MovieDetails />
        </Route>
        <Route render={() => <h1>404</h1>} />
      </Switch>
    </div>
  );
}

export default App;
