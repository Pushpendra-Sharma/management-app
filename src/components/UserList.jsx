import React, { useContext, useEffect, useMemo, useState } from 'react';
import { fetchAllUsers } from '../services/get.users';
import { createHead } from '../utils/head';
import { headData } from '../utils/constants';
import { DyamicTable } from '.';
import { AppContext } from '../contexts/app-context';
import { SET_ALL_USERS } from '../actions';
import { filterUsers } from '../utils/filter';

const head = createHead(headData);

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  const { dispatch, searchQuery, filters } = useContext(AppContext);

  useEffect(() => {
    fetchAllUsers()
      .then(res => {
        setUsers(res.users);
        dispatch({ type: SET_ALL_USERS, payload: res.users });
      })
      .catch(e => setError(e.message));
  }, [dispatch]);

  const filteredUsers = useMemo(
    () => filterUsers({ users, filters, searchQuery }),
    [users, filters, searchQuery]
  );

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <>
      <DyamicTable
        head={head}
        items={filteredUsers}
        isLoading={filteredUsers.length === 0}
      />
    </>
  );
};

export default UserList;
