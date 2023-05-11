import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Radio } from '@atlaskit/radio';
import { AppContext } from '../contexts/app-context';
import { SET_GENDER_FILTER } from '../actions';
import '../styles/filter.css';

const RadioInput = ({ options, title }) => {
  const [onChangeResult, setOnChangeResult] = useState('');
  const { dispatch } = useContext(AppContext);

  const onChange = useCallback(event => {
    setOnChangeResult(event.currentTarget.value);
  }, []);

  useEffect(() => {
    dispatch({ type: SET_GENDER_FILTER, payload: onChangeResult });
  }, [onChangeResult, dispatch]);

  return (
    <div className='radio-container'>
      <h4 className=''>{title}</h4>
      {options.map(option => (
        <Radio
          key={option.value}
          value={option.value}
          label={option.label}
          name={title}
          testId='radio-default'
          isChecked={option.value === onChangeResult}
          onChange={onChange}
        />
      ))}
    </div>
  );
};

export default RadioInput;
