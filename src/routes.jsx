import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Spinner from '@atlaskit/spinner';
import App from './App';
import { Error, MainContainer, ShortListedUsers } from './components';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    loader: () => <Spinner size='xlarge' />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        loader: () => <Spinner size='large' />,
        element: <MainContainer />,
      },
      {
        path: 'shortlisted',
        loader: () => <Spinner size='large' />,
        element: <ShortListedUsers />,
      },
    ],
  },
]);
