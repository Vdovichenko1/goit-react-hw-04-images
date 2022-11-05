import { useState } from 'react';
import { ImageGalleryLi, ImageGalleryImage } from './ImageGalleryItem.styled';
import Modal from '../Modal';
import PropTypes from 'prop-types';

export default function ImageGalleryItem({ largeImageURL, webformatURL, alt }) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(modal => !modal);
  };

  return (
    <>
      <ImageGalleryLi>
        <ImageGalleryImage
          src={webformatURL}
          alt={alt}
          onClick={() => {
            toggleModal();
          }}
        />
      </ImageGalleryLi>
      {modal && <Modal img={largeImageURL} alt={alt} onClose={toggleModal} />}
    </>
  );
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
