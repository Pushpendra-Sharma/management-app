import React from 'react';
import '../styles/filter.css';
import { DropdownCheckbox, DropdownRadio } from './';
import {
  bloodGroupOptions,
  genderOptions,
  universityOptions,
} from '../utils/constants';

const Filter = () => {
  return (
    <div className='filter-container'>
      <h3 className='filter-heading'>Filters</h3>
      <DropdownRadio options={genderOptions} title='Gender' />
      <DropdownCheckbox
        options={bloodGroupOptions}
        title='Blood Group'
        id='bloodGroup'
      />
      <DropdownCheckbox
        options={universityOptions}
        title='University'
        id='university'
      />
    </div>
  );
};

export default Filter;
