import { getSearchResults } from './search';

export const filterUsers = ({ users, filters, searchQuery }) => {
  let filteredUsers = users;
  const { bloodGroup, gender, university } = filters;

  // Apply gender filter
  if (gender) {
    filteredUsers = filteredUsers.filter(user => user.gender === gender);
  }

  // Apply bloodGroup filter
  if (bloodGroup && bloodGroup.length > 0) {
    filteredUsers = filteredUsers.filter(user =>
      bloodGroup.includes(user.bloodGroup)
    );
  }

  // Apply university filter
  if (university && university.length > 0) {
    filteredUsers = filteredUsers.filter(user =>
      university.includes(user.university)
    );
  }

  // Apply search query filter
  if (searchQuery) {
    filteredUsers = getSearchResults(searchQuery, filteredUsers);
  }

  return filteredUsers;
};
