import { getMonthOrDayFromDate } from './get-month-or-day-from-date';
import { findMostFrequentNumber } from './find-most-frequent-number';

export const getTopDayMonthlyTransfers = areeyCLients => {
  const arreyDates = areeyCLients.reduce((arr, client) => {
    if (client.finances.debitIntervall === 'monthly') {
      arr.push(getMonthOrDayFromDate(client.finances.nextDebitDate, 'day'));
    }
    return arr;
  }, []);
  return findMostFrequentNumber(arreyDates);
};
