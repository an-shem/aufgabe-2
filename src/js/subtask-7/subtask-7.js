import { customers } from '../customers';
import { sectionLayoutTask_7 } from './subtask-7-initial-section-layout';
import { dateCorrection } from '../date-correction';
import { creatClientsListWithDeficitBalances } from '../creat-clients-list-with-deficit-balances';

export const subtask_7 = () => {
  let clientsListMarkup = [];
  const arrFunctionsRemuveListener = [];

  if (document.querySelector('#content')) {
    document.querySelector('#content').innerHTML = sectionLayoutTask_7;
  }

  if (document.querySelector('.calendar-form')) {
    const form = document.querySelector('.calendar-form');
    const submitHandler = (event) => {
      event.preventDefault();
      const formDate = event.target.elements.calendar.value;
      const correctFormDate = dateCorrection(formDate);
      const arrClients = creatClientsListWithDeficitBalances(correctFormDate, customers);
      clientsListMarkup = arrClients.map(
        (client) =>
          ` <li class="client">
                  <ul class="client-data-name">
                    <li>Name:</li>
                    <li>Dem fehlenden Guthaben:</li>
                    <li>E-Mail-Adresse:</li>
                    <li>Adresse:</li>
                  </ul>
                  <ul class="client-data-value">
                    <li>${client.name}</li>
                    <li>${client.deficit}</li>
                    <li>${client.eMail}</li>
                    <li>${client.address}</li>
                  </ul>
                </li>`
      );
      const clientsList = document.querySelector('.clients-data');
      const clientsListTitel = document.querySelector('.solution-titel');

      if (clientsList) {
        clientsList.innerHTML = clientsListMarkup.join('');
      }

      if (clientsListTitel) {
        clientsListTitel.style.display = 'block';
      }
    };

    form.addEventListener('submit', submitHandler);

    const deleteSubmitListenerTask_7 = () => {
      form.removeEventListener('submit', submitHandler);
    };

    arrFunctionsRemuveListener.push(deleteSubmitListenerTask_7);
  }
  return arrFunctionsRemuveListener;
};
