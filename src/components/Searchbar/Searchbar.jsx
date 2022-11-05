import PropTypes from 'prop-types';
import { Component } from 'react';
import { toast } from 'react-toastify';
import {
  SearchbarStyle,
  SearchForm,
  Button,
  ButtonLabel,
  Input,
} from './Searchbar.styled';

export default class Searchbar extends Component {
  state = {
    image: '',
  };

  handleImageChange = e => {
    this.setState({
      image: e.currentTarget.value.toLowerCase(),
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.image.trim() === '') {
      toast.error('The field cannot be empty');
      return;
    }
    this.props.onSubmit(this.state.image);
    // console.log(this.state.image);
    this.setState({ image: '' });
  };

  render() {
    return (
      <SearchbarStyle onSubmit={this.handleSubmit}>
        <SearchForm>
          <Button type="submit">
            <ButtonLabel>Search</ButtonLabel>
          </Button>

          <Input
            name="image"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.image}
            onChange={this.handleImageChange}
          />
        </SearchForm>
      </SearchbarStyle>
    );
  }
}
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
