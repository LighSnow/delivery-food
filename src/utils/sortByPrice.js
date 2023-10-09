export const sortByPrice = (array, selectValue) => {
  return [...array].sort((food1, food2) => {
    if (selectValue === "cheap") {
      return food1.price > food2.price ? 1 : -1;
    }
    if (selectValue === "expensive") {
      return food1.price > food2.price ? -1 : 1;
    }
  });
};
