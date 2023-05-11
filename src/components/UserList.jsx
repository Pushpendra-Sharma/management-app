import React, { useContext, useEffect, useState } from 'react';
import { fetchUsers } from '../services/get.users';
import { createHead } from '../utils/head';
import { headData } from '../utils/constants';
import { DyamicTable } from '.';
import { AppContext } from '../contexts/app-context';
import { SET_ALL_USERS } from '../actions';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const { dispatch } = useContext(AppContext);

  useEffect(() => {
    fetchUsers()
      .then(res => {
        setUsers(res.users);
        dispatch({ type: SET_ALL_USERS, payload: res.users });
      })
      .catch(e => setError(e.message));
  }, [dispatch]);

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
