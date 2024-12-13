export const equalizeMonthlyPayments = (areeyCLients, newMontlyPayments) => {
  const newArrayClientsWithChangedPaymentData = [];
  areeyCLients.map(client => {
    if (client.finances.debitIntervall === 'monthly') {
      const newItem = structuredClone(client);
      newItem.finances.nextDebitSum = (newMontlyPayments * 1).toFixed(2);
      newArrayClientsWithChangedPaymentData.push(newItem);
    }
    if (client.finances.debitIntervall === 'quarterly') {
      const newItem = structuredClone(client);
      newItem.finances.nextDebitSum = (newMontlyPayments * 3).toFixed(2);
      newArrayClientsWithChangedPaymentData.push(newItem);
    }
    if (client.finances.debitIntervall === 'half-yearly') {
      const newItem = structuredClone(client);
      newItem.finances.nextDebitSum = (newMontlyPayments * 6).toFixed(2);
      newArrayClientsWithChangedPaymentData.push(newItem);
    }
    if (client.finances.debitIntervall === 'annual') {
      const newItem = structuredClone(client);
      newItem.finances.nextDebitSum = (newMontlyPayments * 12).toFixed(2);
      newArrayClientsWithChangedPaymentData.push(newItem);
    }
  });
  return newArrayClientsWithChangedPaymentData;
};
