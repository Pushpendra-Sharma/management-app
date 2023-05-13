import React, { useContext, useEffect, useState } from 'react';
import { fetchAllUsers } from '../services/get.users';
import { createHead } from '../utils/head';
import { headData } from '../utils/constants';
import { DyamicTable } from '.';
import { AppContext } from '../contexts/app-context';
import { SET_ALL_USERS } from '../actions';
import { getSearchResults } from '../utils/search';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [error, setError] = useState(null);

  const {
    dispatch,
    searchQuery,
    filters: { gender, bloodGroup, university },
  } = useContext(AppContext);

  useEffect(() => {
    fetchAllUsers()
      .then(res => {
        setUsers(res.users);
        setFilteredUsers(res.users);
        dispatch({ type: SET_ALL_USERS, payload: res.users });
      })
      .catch(e => setError(e.message));
  }, [dispatch]);

  useEffect(() => {
    const usersByGender = users.filter(user => {
      if (!gender) return true;
      return user.gender === gender;
    });

    setFilteredUsers(usersByGender);
  }, [gender, users]);

  useEffect(() => {
    const usersByBloodGroup = users.filter(user => {
      if (bloodGroup.length === 0) return true;
      return bloodGroup.includes(user.bloodGroup);
    });

    setFilteredUsers(usersByBloodGroup);
  }, [bloodGroup, users]);

  useEffect(() => {
    const usersByUniversity = users.filter(user => {
      if (university.length === 0) return true;
      return university.includes(user.university);
    });

    setFilteredUsers(usersByUniversity);
  }, [university, users]);

  useEffect(() => {
    if (searchQuery) {
      const searchResults = getSearchResults(searchQuery, users);
      setFilteredUsers(searchResults);
    } else {
      setFilteredUsers(users);
    }
  }, [searchQuery, users]);

  const head = createHead(headData);

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
