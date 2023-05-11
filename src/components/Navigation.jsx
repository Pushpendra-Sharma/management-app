import React from 'react';
import { AtlassianNavigation } from '@atlaskit/atlassian-navigation';
import { Home } from './';

const Navigation = () => {
  return (
    <AtlassianNavigation
      label='EMS'
      renderProductHome={Home}
      primaryItems={[]}
    />
  );
};

export default Navigation;
