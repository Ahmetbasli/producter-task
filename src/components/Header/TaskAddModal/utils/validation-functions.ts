export const validatePoint = (data: string) => {
  if (Number(data) > 9999 || Number(data) < 0 || data === "") {
    return false;
  }
  return true;
};
export const validateContent = (data: string) => {
  if (data === "") {
    return false;
  }
  return true;
};
