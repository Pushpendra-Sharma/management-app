import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../services/get.users';
import { createHead } from '../utils/head';
import { headData } from '../utils/constants';
import { DyamicTable } from '.';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers()
      .then(res => setUsers(res.users))
      .catch(e => setError(e.message));
  }, []);

  const head = createHead(headData);

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <>
      <DyamicTable head={head} items={users} isLoading={users.length === 0} />
    </>
  );
};

export default UserList;
