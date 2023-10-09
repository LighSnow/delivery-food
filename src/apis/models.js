const baseUrl = "http://localhost:3000";

export const fetchDataByName = async (searchValue) => {
  const response = await fetch(`${baseUrl}/${searchValue}`);
  return await response.json();
};
