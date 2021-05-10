import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: null,
      title: '',
      storyline: '',
      imagePath: '',
      genre: '',
      rating: null,
      subtitle: '',
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.getMovieDetails(id);
  }

  getMovieDetails = (id) => {
    this.setState({ loading: true }, async () => {
      const response = await movieAPI.getMovie(id);
      this.setState({
        loading: false,
        id,
        title: response.title,
        storyline: response.storyline,
        imagePath: response.imagePath,
        genre: response.genre,
        rating: response.rating,
        subtitle: response.subtitle,
      });
    });
  }

  cardMovie = () => {
    const { title, storyline, imagePath, genre, rating, subtitle, id } = this.state;
    return (
      <div className="card-datails">
        <header className="header-movie-details">
          <img alt="Movie Cover" src={ `../${imagePath}` } />
          <p>{ ` ${title}` }</p>
        </header>
        <div className="descriptions-movie-details">
          <p>{ `Subtitle: ${subtitle}` }</p>
          <p>{ `Storyline: ${storyline}` }</p>
          <p>{ `Genre: ${genre}` }</p>
          <p>{ `Rating: ${rating}` }</p>
        </div>
        <div className="options-movie-details">
          <button type="button">
            <Link to={ `/movies/${id}/edit` }>
              EDITAR
            </Link>
          </button>
          <button type="button">
            <Link to="/">
              VOLTAR
            </Link>
          </button>
        </div>
      </div>
    );
  }

  render() {
    const { loading } = this.state;

    return (
      <div data-testid="movie-details">
        {loading ? <Loading /> : this.cardMovie()}
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default MovieDetails;
