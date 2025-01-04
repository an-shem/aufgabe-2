import { customers } from '../customers';
import { sectionLayoutTask_6 } from './subtask-6-initial-section-layout';
import { equalizeMonthlyPayments } from '../equalize-monthly-payments';

export const subtask_6 = () => {
  const arrFunctionsRemuveListener = [];
  let newPrice = '';

  if (document.querySelector('#content')) {
    document.querySelector('#content').innerHTML = sectionLayoutTask_6;
  }
  const oldList = document.querySelector('.output-old-list');
  const newList = document.querySelector('.output-new-list');

  if (oldList) {
    customers.map((client) => {
      const clientLi = document.createElement('li');
      oldList.append(clientLi);
      const keys = Object.keys(client);
      const arrDiv = keys.map((key) => {
        let clientValue = client[key];
        if (typeof clientValue === 'object') {
          const keys = Object.keys(clientValue);
          const arrDivClientValue = keys.map(
            (key) =>
              `<div class="client-data-task-5"><div class="client-key">${key}:</div><div class="client-value">${clientValue[key]}</div></div>`
          );
          clientValue = arrDivClientValue.join('');
        }
        return `<div class="client-data-task-5"><div class="client-key">${key}:</div><div class="client-value">${clientValue}</div></div>`;
      });

      clientLi.innerHTML = arrDiv.join('');
    });
  }

  if (document.querySelector('.calendar-form')) {
    const form = document.querySelector('.calendar-form');
    const submitHandler = (event) => {
      event.preventDefault();

      if (newList) {
        const inputValue = event.target.elements.inputPreis.value;
        if (newPrice === inputValue) {
          return;
        }
        newPrice = inputValue;
        newList.innerHTML = '';
        equalizeMonthlyPayments(customers, inputValue).map((client) => {
          const clientLi = document.createElement('li');
          newList.append(clientLi);
          const keys = Object.keys(client);
          const arrDiv = keys.map((key) => {
            let clientValue = client[key];
            if (typeof clientValue === 'object') {
              const keys = Object.keys(clientValue);
              const arrDivClientValue = keys.map(
                (key) =>
                  `<div class="client-data-task-5"><div class="client-key">${key}:</div><div class="client-value">${clientValue[key]}</div></div>`
              );
              clientValue = arrDivClientValue.join('');
            }
            return `<div class="client-data-task-5"><div class="client-key">${key}:</div><div class="client-value">${clientValue}</div></div>`;
          });

          clientLi.innerHTML = arrDiv.join('');
        });
      }
      document.querySelector('.output-new-list-titel').style.display = 'block';
    };

    form.addEventListener('submit', submitHandler);

    const deleteSubmitListenerTask_6 = () => {
      form.removeEventListener('submit', submitHandler);
    };

    arrFunctionsRemuveListener.push(deleteSubmitListenerTask_6);
  }
  return arrFunctionsRemuveListener;
};
