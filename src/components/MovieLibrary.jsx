import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };

    this.handleBookmarkChange = this.handleBookmarkChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submitMovie = this.submitMovie.bind(this);
  }

  handleBookmarkChange({ target }) {
    this.setState({ [target.name]: target.checked });
  }

  handleChange({ target }) {
    this.setState({ [target.name]: target.value });
  }

  submitMovie(newMovie) {
    console.log(newMovie);
    this.setState(({ movies }) => ({
      movies: [...movies, newMovie],
    }));
  }

  render() {
    const {
      searchText, bookmarkedOnly,
      selectedGenre,
    } = this.state;
    let { movies } = this.state;
    movies = movies.filter((movie) => (
      movie.title.includes(searchText)
      || movie.subtitle.includes(searchText)
      || movie.storyline.includes(searchText)
    ));
    movies = bookmarkedOnly ? [movies[0]] : movies;
    movies = movies.filter((movie) => (
      movie.genre.includes(selectedGenre)
    ));
    return (
      <div>
        <AddMovie onClick={ this.submitMovie } />
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleBookmarkChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ movies } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieLibrary;
