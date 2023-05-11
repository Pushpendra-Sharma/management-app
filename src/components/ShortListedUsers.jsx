import React, { useContext } from 'react';
import { AppContext } from '../contexts/app-context';
import UserCard from './UserCard';
import '../styles/shortlist.css';

const ShortListedUsers = () => {
  const { shortListedUsers } = useContext(AppContext);

  const shortListedUsersArray = Object.values(shortListedUsers);
  return (
    <div className='shortlist-container'>
      {shortListedUsersArray.length > 0 ? (
        shortListedUsersArray.map(user => (
          <UserCard data={user} key={user.id} />
        ))
      ) : (
        <p className='shortlist-empty-container'>No users shortlisted</p>
      )}
    </div>
  );
};

export default ShortListedUsers;
