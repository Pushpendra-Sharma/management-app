import React, { useContext, useEffect, useState } from 'react';
import { Checkbox } from '@atlaskit/checkbox';
import { AppContext } from '../contexts/app-context';
import { SET_BLOOD_GROUP_FILTER, SET_UNIVERSITY_FILTER } from '../actions';

const CheckBoxInput = ({ options, id }) => {
  const [selected, setSelected] = useState([]);
  const { dispatch } = useContext(AppContext);

  const handleCheckboxChange = (event, value) => {
    const { checked } = event.target;
    const newState = checked
      ? selected.concat(value)
      : selected.filter(item => item !== value);
    setSelected(newState);
  };

  useEffect(() => {
    if (id === 'bloodGroup')
      dispatch({ type: SET_BLOOD_GROUP_FILTER, payload: selected });

    if (id === 'university')
      dispatch({ type: SET_UNIVERSITY_FILTER, payload: selected });
  }, [selected, id, dispatch]);

  return (
    <div className='checkbox-container'>
      {options.map(option => (
        <Checkbox
          key={option.value}
          isChecked={selected.includes(option.value)}
          label={option.label}
          onChange={event => handleCheckboxChange(event, option.value)}
        />
      ))}
    </div>
  );
};

export default CheckBoxInput;
