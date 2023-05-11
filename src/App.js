import React from 'react';
import '@atlaskit/css-reset';
import './App.css';
import { Outlet } from 'react-router-dom';
import { Navigation } from './components';
import { AppProvider } from './contexts/app-context';

function App() {
  return (
    <AppProvider>
      <Navigation />
      <Outlet />
    </AppProvider>
  );
}

export default App;
