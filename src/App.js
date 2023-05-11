import React from 'react';
import '@atlaskit/css-reset';
import './App.css';
import { UserList, Navigation } from './components';

function App() {
  return (
    <>
      <Navigation />
      <UserList />
    </>
  );
}

export default App;
