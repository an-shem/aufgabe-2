export const getNamesAllClients = (customers) => {
  const arrNamesAllClients = customers.map((client) => client.name);
  return arrNamesAllClients;
};
