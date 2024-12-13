import { getMonthOrDayFromDate } from './get-month-or-day-from-date';

export const createClientListByBirthdayMonth = (date, areeyCLients) => {
  const month = getMonthOrDayFromDate(date, 'month');

  const arreyFilteredClients = areeyCLients.reduce((arrey, client) => {
    const clientBirthdayMonth = getMonthOrDayFromDate(
      client.birthDate,
      'month'
    );
    if (month === clientBirthdayMonth) {
      arrey.push(client);
    }
    return arrey;
  }, []);

  return arreyFilteredClients;
};
