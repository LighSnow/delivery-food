export const filterByKeysAndInput = (foods, inputValue, keys) => {
  const searchedValue = inputValue.toLowerCase();

  return foods.filter((food) => {
    return keys.some((key) => {
      const value = food[key];
      return value && value.toLowerCase().includes(searchedValue);
    });
  });
};
