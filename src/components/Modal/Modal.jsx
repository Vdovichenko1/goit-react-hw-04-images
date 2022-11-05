import {Component} from 'react';
import { createPortal } from "react-dom";
import { Overlay,ModalImg } from "./Modal.styled";
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
      window.addEventListener('keydown', this.handleKeyDown)
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

    handleKeyDown = e => {
          if (e.code === 'Escape') {
        this.props.onClose()
        }
    }

    handleBackdropClose = e => {
    if (e.currentTarget === e.target) {
			this.props.onClose();
		}
}

    render() {
      const { img, alt } = this.props;
    return createPortal (
      <Overlay onClick={this.handleBackdropClose}>
        <ModalImg>
          <img src={img} alt={alt} width="700" height="500"/>
        </ModalImg>
      </Overlay>, modalRoot
    );
  }
}

Modal.propTypes = {
	onClose: PropTypes.func.isRequired,
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};