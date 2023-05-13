import React, { useContext, useEffect, useState } from 'react';
import DropdownMenu, {
  DropdownItemRadio,
  DropdownItemRadioGroup,
} from '@atlaskit/dropdown-menu';
import Button from '@atlaskit/button/standard-button';
import '../styles/filter.css';
import { SET_GENDER_FILTER } from '../actions';
import { AppContext } from '../contexts/app-context';

const DropdownRadio = ({ options, title }) => {
  const [selected, setSelected] = useState('');
  const { dispatch } = useContext(AppContext);

  useEffect(() => {
    dispatch({ type: SET_GENDER_FILTER, payload: selected });
  }, [selected, dispatch]);

  return (
    <div className='dropdown-radio-container'>
      <DropdownMenu trigger={title}>
        <Button
          className='clear-btn'
          appearance='subtle'
          onClick={() => setSelected('')}
        >
          Clear
        </Button>
        <DropdownItemRadioGroup title='' id='actions'>
          <div className='dropdown-radio-options'>
            {options.map(option => (
              <DropdownItemRadio
                id={option.value}
                onClick={() => setSelected(option.value)}
                isSelected={selected === option.value}
              >
                {option.label}
              </DropdownItemRadio>
            ))}
          </div>
        </DropdownItemRadioGroup>
      </DropdownMenu>
    </div>
  );
};

export default DropdownRadio;
