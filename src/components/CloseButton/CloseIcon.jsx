import React from 'react';
import PropTypes from 'prop-types';

const CloseIcon = ({
  fill, width, opacity, className, viewBox,
}) => (
  <svg
    width={width}
    height={width}
    viewBox={viewBox}
    fill={fill}
    opacity={opacity}
    className={`svg-icon ${className}`}
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" />
  </svg>
);

CloseIcon.propTypes = {
  fill: PropTypes.string,
  width: PropTypes.string,
  opacity: PropTypes.string,
  className: PropTypes.string,
  viewBox: PropTypes.string,
};

CloseIcon.defaultProps = {
  fill: '#000',
  width: '14px',
  opacity: '1.0',
  className: '',
  viewBox: '0 0 14 14',
};

export default CloseIcon;
