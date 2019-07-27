import React from 'react';

import './search-box.styles.css';

// functional component: if we don't use internal state, or no lifecycle methods needed
export const SearchBox = ({ placeholder, handleChange }) => (
  <input 
    className='search'
    type="search" 
    placeholder={ placeholder }
    onChange={ handleChange }
  />
);