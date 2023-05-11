import {
  SET_ALL_USERS,
  SET_BLOOD_GROUP_FILTER,
  SET_GENDER_FILTER,
  SET_MODAL_USER,
  SET_MODAL_USER_ID,
  SET_UNIVERSITY_FILTER,
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

    case SET_GENDER_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          gender: action.payload,
        },
      };

    case SET_BLOOD_GROUP_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          bloodGroup: action.payload,
        },
      };

    case SET_UNIVERSITY_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          university: action.payload,
        },
      };

    default:
      return state;
  }
}
