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
});

export const initialState = {
  users: {},
  modalUser: {},
  modalUserId: null,
  shortListedUsers: {},
  dispatch: () => {},
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
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
