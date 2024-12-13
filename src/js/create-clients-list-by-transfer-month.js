import { getMonthOrDayFromDate } from './get-month-or-day-from-date';

export const createClientListByTransferMonth = (date, areeyCLients) => {
  const month = getMonthOrDayFromDate(date, 'month');
  const arreyFilteredClients = areeyCLients.reduce((arrey, client) => {
    const clientTransferMonth = getMonthOrDayFromDate(
      client.finances.nextDebitDate,
      'month'
    );
    if (month === clientTransferMonth) {
      arrey.push(client);
    }
    return arrey;
  }, []);

  return arreyFilteredClients;
};
