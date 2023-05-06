import React from 'react';
import PropTypes from 'prop-types';
import './RedBackground.sass';

const RedBackground = ({side, children, top, bottom, right, left}) => {
  return (
    <div className={`red-image ${side}`}>
      <div className={`red-image-content ${side}`} style={{ top, bottom, right, left }}>
        {children}
      </div>
    </div>
  );
}

RedBackground.propTypes = {
  side: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  top: PropTypes.string,
  bottom: PropTypes.string,
  right: PropTypes.string,
  left: PropTypes.string,
}

RedBackground.defaultProps = {
  top: 'auto',
  bottom: 'auto',
  right: 'auto',
  left: 'auto',
}

export default RedBackground;