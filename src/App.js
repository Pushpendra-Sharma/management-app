import React from 'react';
import '@atlaskit/css-reset';
import './App.css';
import { Navigation, SearchBar, UserList, UserModal } from './components';

function App() {
  return (
    <>
      <Navigation />
      <SearchBar />
      <UserList />
      <UserModal />
    </>
  );
}

export default App;
