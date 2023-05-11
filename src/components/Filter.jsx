import React from 'react';
import '../styles/filter.css';
import { CheckBoxInput, RadioInput } from './';
import { bloodGroupOptions, genderOptions } from '../utils/constants';

const Filter = () => {
  return (
    <div className='filter-container'>
      <h3 className='filter-heading'>Filters</h3>
      <RadioInput options={genderOptions} title='Gender' />
      <CheckBoxInput
        options={bloodGroupOptions}
        title='Blood Group'
        id='bloodGroup'
      />
    </div>
  );
};

export default Filter;
