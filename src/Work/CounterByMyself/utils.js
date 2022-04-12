export const btn = (value, setSpace, space) => {
  if (space === "") {
    setSpace(value);
  } else {
    setSpace(space + value);
  }
};
