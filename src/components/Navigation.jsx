import React from 'react';
import {
  AtlassianNavigation,
  PrimaryButton,
} from '@atlaskit/atlassian-navigation';
import { Home } from './';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <AtlassianNavigation
      label='EMS'
      renderProductHome={Home}
      primaryItems={[
        <Link to='/'>
          <PrimaryButton>Home</PrimaryButton>
        </Link>,
        <Link to='/shortlisted'>
          <PrimaryButton>Shortlisted</PrimaryButton>
        </Link>,
      ]}
    />
  );
};

export default Navigation;
