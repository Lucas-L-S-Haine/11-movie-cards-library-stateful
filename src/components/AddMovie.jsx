import React from 'react';
import PropTypes from 'prop-types';
import AddTitle from './addMovie/AddTitle';
import AddSubtitle from './addMovie/AddSubtitle';
import AddImage from './addMovie/AddImage';
import AddStoryline from './addMovie/AddStoryline';
import AddRating from './addMovie/AddRating';
import AddGenre from './addMovie/AddGenre';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtitle: '',
      storyline: '',
      imagePath: '',
      genre: 'action',
      rating: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    this.setState({ [target.name]: target.value });
  }

  // componentDidUpdate() {
  //
  // }

  handleClick() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      title: '',
      subtitle: '',
      storyline: '',
      imagePath: '',
      genre: 'action',
      rating: 0,
    });
  }

  render() {
    const {
      title, subtitle, storyline,
      imagePath, genre, rating,
    } = this.state;
    return (
      <div className="search-field" id="add-movie">
        <form data-testid="add-movie-form" id="add-movie-form">
          <AddTitle title={ title } onChange={ this.handleChange } />
          <AddSubtitle subtitle={ subtitle } onChange={ this.handleChange } />
          <AddImage imagePath={ imagePath } onChange={ this.handleChange } />
          <AddStoryline storyline={ storyline } onChange={ this.handleChange } />
          <AddGenre genre={ genre } onChange={ this.handleChange } />
          <AddRating rating={ parseFloat(rating) } onChange={ this.handleChange } />
          <button
            data-testid="send-button"
            type="button"
            onClick={ this.handleClick }
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
  // title: PropTypes.string.isRequired,
  // subtitle: PropTypes.string.isRequired,
  // storyline: PropTypes.string.isRequired,
  // genre: PropTypes.string.isRequired,
  // imagePath: PropTypes.string.isRequired,
  // rating: PropTypes.number.isRequired,
};

export default AddMovie;
