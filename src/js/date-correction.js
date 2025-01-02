export const dateCorrection = (date) => {
  const month = date.split(/[.-]/)[1];
  const day = date.split(/[.-]/)[2];
  const year = date.split(/[.-]/)[0];
  return `${day}-${month}-${year}`;
};
