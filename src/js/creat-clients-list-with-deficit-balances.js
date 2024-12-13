import { createClientListByTransferMonth } from './create-clients-list-by-transfer-month';

export const creatClientsListWithDeficitBalances = (date, areeyCLients) => {
  const arreyDate = date.split(/[.-]/);
  const nextMonth =
    date.split(/[.-]/)[1] === '12'
      ? '01'
      : `${+date.split(/[.-]/)[1] + 1}`.padStart(2, '0');
  arreyDate[1] = nextMonth;
  const newDate = arreyDate.join('-');
  const arrayClientsToPayNextMonth = createClientListByTransferMonth(
    newDate,
    areeyCLients
  );
  const arrayCclientsWithDeficitBalances = arrayClientsToPayNextMonth.filter(
    client => client.finances.accountBalance < client.finances.nextDebitSum
  );
  const dataClientsWithDeficitBalance = arrayCclientsWithDeficitBalances.reduce(
    (arr, client) => {
      const newDataClients = {
        name: client.name + ' ' + client.preName,
        eMail: client.eMail,
        address: client.address,
        deficit: client.finances.accountBalance - client.finances.nextDebitSum,
      };
      arr.push(newDataClients);
      return arr;
    },
    []
  );
  return dataClientsWithDeficitBalance;
};
