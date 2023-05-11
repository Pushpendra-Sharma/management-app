import React from 'react';
import { Filter, SearchBar, UserList, UserModal } from '.';

const MainContainer = () => {
  return (
    <div className=''>
      <SearchBar />
      <Filter />
      <UserList />
      <UserModal />
    </div>
  );
};

export default MainContainer;
