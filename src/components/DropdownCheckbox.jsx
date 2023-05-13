import React, { useContext, useEffect, useState } from 'react';
import DropdownMenu, {
  DropdownItemCheckbox,
  DropdownItemCheckboxGroup,
} from '@atlaskit/dropdown-menu';
import { MenuGroup } from '@atlaskit/menu';
import '../styles/filter.css';
import { AppContext } from '../contexts/app-context';
import { SET_BLOOD_GROUP_FILTER, SET_UNIVERSITY_FILTER } from '../actions';

const DropdownCheckbox = ({ options, title, id }) => {
  const [checked, setChecked] = useState({});

  const { dispatch } = useContext(AppContext);

  const toggle = name => {
    setChecked(prev => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  useEffect(() => {
    if (id === 'bloodGroup')
      dispatch({ type: SET_BLOOD_GROUP_FILTER, payload: checked });

    if (id === 'university')
      dispatch({ type: SET_UNIVERSITY_FILTER, payload: checked });
  }, [checked, id, dispatch]);

  return (
    <div className='dropdown-checkbox-container'>
      <DropdownMenu trigger={title}>
        <MenuGroup minWidth={96} maxHeight={300}>
          <DropdownItemCheckboxGroup isScrollable title='' id='actions'>
            <div className='dropdown-checkbox-options'>
              {options.map(option => (
                <DropdownItemCheckbox
                  id={option.value}
                  onClick={e => toggle(option.value)}
                  isSelected={checked[option.value]}
                >
                  {option.label}
                </DropdownItemCheckbox>
              ))}
            </div>
          </DropdownItemCheckboxGroup>
        </MenuGroup>
      </DropdownMenu>
    </div>
  );
};

export default DropdownCheckbox;
