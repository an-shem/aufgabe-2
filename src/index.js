import { customers } from './js/customers';
import { createClientListByBirthdayMonth } from './js/create-clients-list-by-birthday-month';
import { createClientListByTransferMonth } from './js/create-clients-list-by-transfer-month';
import { getEmailByName } from './js/get-email-by-name';
import { getTopDayMonthlyTransfers } from './js/get-top-day-monthly-transfers';
import { creatClientsListWithoutFinancialData } from './js/creat-clients-list-without-financial-data';
import { equalizeMonthlyPayments } from './js/equalize-monthly-payments';
import { creatClientsListWithDeficitBalances } from './js/creat-clients-list-with-deficit-balances';

import { sectionExit } from './js/section-exit';
import { sectionClos } from './js/section-clos';
import { subtask_1 } from './js/subtask-1/subtask-1';
import { subtask_2 } from './js/subtask-2/subtask-2';
import { subtask_3 } from './js/subtask-3/subtask-3';

let firstClick = false;
let sectionOpen = false;
let activTask = '';
let delaySetTimeout = 0;
let arreyFunctionsRemuveListener = [];

const buttonsList = document.querySelector('.task-nav');
buttonsList.addEventListener('click', (e) => {
  if (e.target !== e.currentTarget) {
    if (!firstClick) {
      firstClick = true;
      document.querySelector('.welcome-section').classList.add('welcome-section-invisibility');
    }
    const subtaskNumber = e.target.dataset.subtask;

    if (activTask !== e.target) {
      if (activTask !== '') {
        activTask.classList.remove('task-nav-item-activ');
        sectionClos(sectionOpen, arreyFunctionsRemuveListener);
        arreyFunctionsRemuveListener = [];
        delaySetTimeout = 4000;
      }
      activTask = e.target;
      activTask.classList.add('task-nav-item-activ');

      switch (subtaskNumber) {
        case '1':
          setTimeout(() => {
            sectionExit(sectionOpen);
            const remuveFunction = subtask_1();
            arreyFunctionsRemuveListener.push(...remuveFunction);
            console.log('arreyFunctionsRemuveListener :>> ', arreyFunctionsRemuveListener);
          }, delaySetTimeout);
          break;
        case '2':
          setTimeout(() => {
            sectionExit(sectionOpen);
            const remuveFunction = subtask_2();
            arreyFunctionsRemuveListener.push(...remuveFunction);
            console.log('arreyFunctionsRemuveListener :>> ', arreyFunctionsRemuveListener);
          }, delaySetTimeout);
          console.log('fanction-2');
          break;
        case '3':
          setTimeout(() => {
            sectionExit(sectionOpen);
            const remuveFunction = subtask_3();
            arreyFunctionsRemuveListener.push(...remuveFunction);
            console.log('arreyFunctionsRemuveListener :>> ', arreyFunctionsRemuveListener);
          }, delaySetTimeout);
          console.log('fanction-3');
          break;
        case '4':
          setTimeout(() => {
            sectionExit(sectionOpen);
            subtask_1();
          }, delaySetTimeout);
          console.log('fanction-4');
          break;
        case '5':
          setTimeout(() => {
            sectionExit(sectionOpen);
            subtask_1();
          }, delaySetTimeout);
          console.log('fanction-5');
          break;
        case '6':
          setTimeout(() => {
            sectionExit(sectionOpen);
            subtask_1();
          }, delaySetTimeout);
          console.log('fanction-6');
          break;
        case '7':
          setTimeout(() => {
            sectionExit(sectionOpen);
            subtask_1();
          }, delaySetTimeout);
          console.log('fanction-7');
          break;

        default:
          console.log('Invalid subscription type');
      }
    }
  }
});

// const usedDate = '27.10.2023';
// const newPrice = 19.95;

// console.log(
//   '1) List of clients whose birthday is in the specified month: >>',
//   createClientListByBirthdayMonth(usedDate, customers)
// );
// console.log(
//   '2) List of clients whose next transfer date is in the specified month: >> ',
//   createClientListByTransferMonth(usedDate, customers)
// );

// console.log('3) Email address for the client whose name has been entered: >> ', getEmailByName('Baker', customers));
// console.log(
//   '4) The most popular day of the month for monthly interval transfers: >> ',
//   getTopDayMonthlyTransfers(customers)
// );
// console.log('5) Client list without financial information: >> ', creatClientsListWithoutFinancialData(customers));
// console.log(
//   '6) Introduction of a new monthly tariff for all customers: >> ',
//   equalizeMonthlyPayments(customers, newPrice)
// );

// console.log(
//   '7) Creation of a list of clients who have insufficient funds on their account to pay the next payment: >> ',
//   creatClientsListWithDeficitBalances(usedDate, customers)
// );
