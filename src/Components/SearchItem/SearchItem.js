import React from 'react';

import './SearchItem.css';

const SearchItem = props => {
  return (
    <div
      className='SearchItem'
      onClick={props.onClick}
    >
      {props.data}
    </div>
  );
};

export default SearchItem;