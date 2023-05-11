import React, { useContext, useEffect, useState } from 'react';
import TextField from '@atlaskit/textfield';
import SearchIcon from '@atlaskit/icon/glyph/search';
import '../styles/search.css';
import { SET_SEARCH_QUERY } from '../actions';
import { AppContext } from '../contexts/app-context';

const SearchBar = () => {
  const [value, setValue] = useState('');
  const { dispatch } = useContext(AppContext);

  const onChange = event => {
    setValue(event.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
       dispatch({ type: SET_SEARCH_QUERY, payload: value });
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [value, dispatch]);

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
