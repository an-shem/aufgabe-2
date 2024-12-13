export const creatClientsListWithoutFinancialData = areeyCLients => {
  const newArr = [];
  areeyCLients.map(client => {
    const newItem = { ...client };
    delete newItem.finances;
    newArr.push(newItem);
  });
  return newArr;
};
