import { customers } from '../customers';
import { sectionLayoutTask_5 } from './subtask-5-initial-section-layout';
import { creatClientsListWithoutFinancialData } from '../creat-clients-list-without-financial-data';

export const subtask_5 = () => {
  const arrFunctionsRemuveListener = [];

  if (document.querySelector('#content')) {
    document.querySelector('#content').innerHTML = sectionLayoutTask_5;
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

  if (document.querySelector('.calendar-btn')) {
    const btn = document.querySelector('.calendar-btn');
    const clickHandler = () => {
      if (newList) {
        creatClientsListWithoutFinancialData(customers).map((client) => {
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

    btn.addEventListener('click', clickHandler);

    const deleteSubmitListenerTask_5 = () => {
      btn.removeEventListener('click', clickHandler);
    };

    arrFunctionsRemuveListener.push(deleteSubmitListenerTask_5);
  }
  return arrFunctionsRemuveListener;
};
