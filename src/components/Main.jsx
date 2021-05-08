import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import MovieList from '../pages/MovieList';
import NewMovie from '../pages/NewMovie';
import MovieDetails from '../pages/MovieDetails';
import EditMovie from '../pages/EditMovie';
import NotFound from '../pages/NotFound';

class Main extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={ MovieList } />
          <Route path="/movies/new" component={ NewMovie } />
          <Route path="/movies/:id/edit" component={ EditMovie } />
          <Route path="/movies/:id" component={ MovieDetails } />
          <Route path="/404" component={ NotFound } />
          <Route path="">
            <Redirect to="/404" />
          </Route>
        </Switch>
      </main>
    );
  }
}

export default Main;
