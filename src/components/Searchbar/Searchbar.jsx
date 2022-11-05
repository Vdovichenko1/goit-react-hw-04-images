import PropTypes from 'prop-types';
import { useState } from 'react';
import { toast } from 'react-toastify';
import {
  SearchbarStyle,
  SearchForm,
  Button,
  ButtonLabel,
  Input,
} from './Searchbar.styled';

export default function Searchbar({onSubmit}) {
  const [image, setImage] = useState('')

  const handleImageChange = e => {
    setImage(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (image.trim() === '') {
      toast.error('The field cannot be empty');
      return;
    }
    onSubmit(image);
    setImage('');
  };

    return (
      <SearchbarStyle onSubmit={handleSubmit}>
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
            value={image}
            onChange={handleImageChange}
          />
        </SearchForm>
      </SearchbarStyle>
    );
}
  
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
