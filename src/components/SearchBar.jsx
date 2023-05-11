import React, { useState } from 'react';
import TextField from '@atlaskit/textfield';
import SearchIcon from '@atlaskit/icon/glyph/search';
import '../styles/search.css';

const SearchBar = () => {
  const [value, setValue] = useState('');

  const onChange = event => {
    setValue(event.target.value);
  };

  return (
    <div className='search-container'>
      <TextField
        icon={<SearchIcon label='Search icon' size='medium' />}
        placeholder='Search...'
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBar;
