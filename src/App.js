import React from 'react';
import '@atlaskit/css-reset';
import './App.css';
import { Navigation, UserList, UserModal } from './components';

function App() {
  return (
    <>
      <Navigation />
      <UserList />
      <UserModal />
    </>
  );
}

export default App;
