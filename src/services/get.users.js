export const fetchUsers = async () => {
  try {
    const response = await fetch('https://dummyjson.com/users');
    const json = await response.json();
    return json;
  } catch (err) {
    return err;
  }
};
