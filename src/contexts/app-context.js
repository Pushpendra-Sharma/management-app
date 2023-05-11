import React, { createContext, useCallback, useReducer, useState } from 'react';
import { appReducer } from '../reducers';

export const AppContext = createContext({
  isModalOpen: false,
  setModalOpen: () => {},
  setModalClose: () => {},
  users: [],
  modalUser: {},
  modalUserId: null,
  shortListedUsers: {},
  dispatch: () => {},
  filters: {
    gender: null,
    bloodGroup: null,
    university: null,
  },
});

export const initialState = {
  users: {},
  modalUser: {},
  modalUserId: null,
  shortListedUsers: {},
  dispatch: () => {},
  filters: {
    gender: null,
    bloodGroup: null,
    university: null,
  },
};

AppContext.displayName = 'AppContext';

export const AppProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [state, dispatch] = useReducer(appReducer, initialState);

  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  const contextValue = {
    isModalOpen: isOpen,
    setModalOpen: openModal,
    setModalClose: closeModal,
    users: state.users,
    modalUser: state.modalUser,
    modalUserid: state.modalUserId,
    shortListedUsers: state.shortListedUsers,
    dispatch,
    filters: state.filters,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
