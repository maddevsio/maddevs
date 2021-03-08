// valid simbols 0-9, +, -
export const phone = value => {
  const regex = /^[0-9\s- \+]*$/g;
  if (value.match(regex)) {
    return true;
  }
  return false;
};
