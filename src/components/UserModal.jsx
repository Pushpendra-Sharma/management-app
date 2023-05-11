import React, { useContext } from 'react';
import Button from '@atlaskit/button/standard-button';
import Modal, {
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalTransition,
} from '@atlaskit/modal-dialog';
import { AppContext } from '../contexts/app-context';
import { SHORTLIST_USER } from '../actions';
import UserCard from './UserCard';

const UserModal = () => {
  const { isModalOpen, setModalClose, modalUser, dispatch } =
    useContext(AppContext);

  const handleClick = () => {
    dispatch({
      type: SHORTLIST_USER,
      payload: { id: modalUser.id, user: modalUser },
    });
    setModalClose();
  };

  return (
    <ModalTransition>
      {isModalOpen && (
        <Modal onClose={setModalClose}>
          <ModalHeader>
            <ModalTitle>{modalUser.firstName}</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <UserCard data={modalUser} />
          </ModalBody>
          <ModalFooter>
            <Button appearance='subtle' onClick={setModalClose}>
              Close
            </Button>
            <Button appearance='primary' onClick={handleClick} autoFocus>
              Shortlist
            </Button>
          </ModalFooter>
        </Modal>
      )}
    </ModalTransition>
  );
};

export default UserModal;
