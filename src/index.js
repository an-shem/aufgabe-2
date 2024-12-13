import { customers } from './js/customers';
import { createClientListByBirthdayMonth } from './js/create-clients-list-by-birthday-month';
import { createClientListByTransferMonth } from './js/create-clients-list-by-transfer-month';
import { getEmailByName } from './js/get-email-by-name';
import { getTopDayMonthlyTransfers } from './js/get-top-day-monthly-transfers';
import { creatClientsListWithoutFinancialData } from './js/creat-clients-list-without-financial-data';
import { equalizeMonthlyPayments } from './js/equalize-monthly-payments';
import { creatClientsListWithDeficitBalances } from './js/creat-clients-list-with-deficit-balances';

const usedDate = '27.10.2023';
const newPrice = 19.95;

console.log(
  '1) List of clients whose birthday is in the specified month: >>',
  createClientListByBirthdayMonth(usedDate, customers)
);
console.log(
  '2) List of clients whose next transfer date is in the specified month: >> ',
  createClientListByTransferMonth(usedDate, customers)
);

console.log(
  '3) Email address for the client whose name has been entered: >> ',
  getEmailByName('Baker', customers)
);
console.log(
  '4) The most popular day of the month for monthly interval transfers: >> ',
  getTopDayMonthlyTransfers(customers)
);
console.log(
  '5) Client list without financial information: >> ',
  creatClientsListWithoutFinancialData(customers)
);
console.log(
  '6) Introduction of a new monthly tariff for all customers: >> ',
  equalizeMonthlyPayments(customers, newPrice)
);

console.log(
  '7) Creation of a list of clients who have insufficient funds on their account to pay the next payment: >> ',
  creatClientsListWithDeficitBalances(usedDate, customers)
);
