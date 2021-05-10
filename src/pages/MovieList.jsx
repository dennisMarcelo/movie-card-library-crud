import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: null,
    };
  }

  componentDidMount() {
    this.FeachMovies();
  }

  FeachMovies = () => {
    this.setState({ loading: true }, async () => {
      const response = await movieAPI.getMovies();
      this.setState({
        movies: response,
        loading: false,
      });
    });
  }

  render() {
    const { movies, loading } = this.state;

    return (
      <div data-testid="movie-list">
        <div className="box-controler-movie-list">
          <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        </div>
        <div className="movie-list">
          {loading
            ? <Loading />
            : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        </div>
      </div>
    );
  }
}

export default MovieList;
