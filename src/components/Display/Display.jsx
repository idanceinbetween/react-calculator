import React from 'react';
import PropTypes from 'prop-types';
import './Display.css';

const Display = ( {displayValue} ) => {
  return (
      <div className='display-container'>
          {displayValue}
      </div>
  )
}

Display.propTypes = { displayValue: PropTypes.string.isRequired};

export default Display;
