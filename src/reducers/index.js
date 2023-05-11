import {
  SET_ALL_USERS,
  SET_MODAL_USER,
  SET_MODAL_USER_ID,
  SHORTLIST_USER,
} from '../actions';

export function appReducer(state, action) {
  switch (action.type) {
    case SET_MODAL_USER_ID:
      return { ...state, modalUserId: action.payload };

    case SET_ALL_USERS:
      return { ...state, users: action.payload };

    case SET_MODAL_USER:
      const modalUser = state.users?.find(user => user.id === action.payload);
      return {
        ...state,
        modalUser,
      };

    case SHORTLIST_USER:
      const { id, user } = action.payload;
      return {
        ...state,
        shortListedUsers: { ...state.shortListedUsers, [id]: user },
      };

    default:
      return state;
  }
}
