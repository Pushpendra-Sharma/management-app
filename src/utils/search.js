export const getSearchResults = (query, users) => {
  const searchTerm = query.toLowerCase();
  const regex = new RegExp(searchTerm, 'i');

  const filteredUsers = users.filter(user => regex.test(user.firstName));

  return filteredUsers;
};
