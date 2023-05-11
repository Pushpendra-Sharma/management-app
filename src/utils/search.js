export const getSearchResults = (query, users) => {
  const searchTerm = query.toLowerCase();
  const regex = new RegExp(searchTerm, 'i');

  const filteredUsers = users.filter(
    user =>
      regex.test(user.firstName) ||
      regex.test(user.maidenName) ||
      regex.test(user.lastName) ||
      regex.test(user.username) ||
      regex.test(user.phone) ||
      regex.test(user.address.city) ||
      regex.test(user.university) ||
      regex.test(user.email) ||
      regex.test(user.company.name) ||
      regex.test(user.company.title)
  );

  return filteredUsers.map(user => ({
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
  }));
};
