export const changeImagePath = (path) => {
  const [, ...rest] = path.split("/");

  return `/src/assets/img/${rest.join("/")}`;
};
