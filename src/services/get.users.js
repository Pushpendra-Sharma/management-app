export const fetchAllUsers = async () => {
  try {
    const response = await fetch('https://dummyjson.com/users?limit=100');
    const json = await response.json();
    return json;
  } catch (err) {
    return err;
  }
};
