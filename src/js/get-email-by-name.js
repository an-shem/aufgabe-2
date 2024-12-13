export const getEmailByName = (name, areeyCLients) => {
  const arreyFilteredClients = areeyCLients.filter(
    client => name === client.name
  );
  return arreyFilteredClients[0].eMail;
};
