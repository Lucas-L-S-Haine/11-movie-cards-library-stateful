import React from 'react';
import PropTypes from 'prop-types';
import AddTitle from './addMovie/AddTitle';
import AddSubtitle from './addMovie/AddSubtitle';
import AddImage from './addMovie/AddImage';
import AddStoryline from './addMovie/AddStoryline';
import AddRating from './addMovie/AddRating';
import AddGenre from './addMovie/AddGenre';

class AddMovie extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      subtitle: '',
      storyline: '',
      imagePath: '',
      bookmarked: false,
      genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const {
      title, subtitle, storyline,
      imagePath, bookmarked, genre,
    } = this.state;
    const { onClick } = this.props;
    return (
      <div className="search-field">
        <form data-testid="add-movie-form">
          <AddTitle title={ title } onChange={ this.handleChange } />
          <AddSubtitle subtitle={ subtitle } onChange={ this.handleChange } />
          <AddImage imagePath={ imagePath } onChange={ this.handleChange } />
          <AddStoryline storyline={ storyline } onChange={ this.handleChange } />
          <AddGenre genre={ genre } onChange={ this.handleChange } />
          <AddRating />
          <button
            data-testid="send-button"
            type="button"
            onClick={ onClick }
          >
            Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
