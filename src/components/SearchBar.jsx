import React from 'react';
import PropTypes from 'prop-types';
// import MovieList from './MovieList';
import SearchText from './searchBar/SearchText';
import SearchCheckbox from './searchBar/SearchCheckbox';
import SearchSelect from './searchBar/SearchSelect';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange,
      bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <div className="search-field">
        <form data-testid="search-bar-form">
          <SearchText
            searchText={ searchText }
            onSearchTextChange={ onSearchTextChange }
          />
          <br />
          <SearchCheckbox
            bookmarkedOnly={ bookmarkedOnly }
            onBookmarkedChange={ onBookmarkedChange }
          />
          <br />
          <SearchSelect
            selectedGenre={ selectedGenre }
            onSelectedGenreChange={ onSelectedGenreChange }
          />
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
