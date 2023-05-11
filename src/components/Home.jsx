import React from 'react';
import { JiraIcon, JiraLogo } from '@atlaskit/logo';
import { ProductHome } from '@atlaskit/atlassian-navigation';

const ExampleHome = () => (
  <ProductHome
    href='#'
    siteTitle='Employee Management System'
    icon={JiraIcon}
    logo={JiraLogo}
  />
);

export default ExampleHome;
