export const getMonthOrDayFromDate = (date, value) => {
  const month = date.split(/[.-]/)[1];
  const day = date.split(/[.-]/)[0];
  return value === 'month' ? month : day;
};
