import React from 'react';
import PropTypes from 'prop-types';
import CloseIcon from './CloseIcon';
import './CloseButton.sass';

const CloseButton = ({handleOnClick}) => {
  return(
    <div className="close-button" onClick={handleOnClick}>
      <CloseIcon />
    </div>
  )
}

export default CloseButton;

CloseButton.propTypes = {
  handleOnClick: PropTypes.func,
};

CloseButton.defaultProps = {
  handleOnClick: () => {},
}