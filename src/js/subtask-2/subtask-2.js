import { customers } from '../customers';
import { sectionLayoutTask_2 } from './subtask-2-initial-section-layout';
import { dateCorrection } from '../date-correction';
import { createClientListByTransferMonth } from '../create-clients-list-by-transfer-month';

export const subtask_2 = () => {
  let clientsListMarkup = [];
  const arrFunctionsRemuveListener = [];

  if (document.querySelector('#content')) {
    document.querySelector('#content').innerHTML = sectionLayoutTask_2;
  }

  if (document.getElementById('calendar-date')) {
    document.getElementById('calendar-date').valueAsDate = new Date();
  }

  if (document.querySelector('.calendar-form')) {
    const form = document.querySelector('.calendar-form');
    const submitHandler = (event) => {
      event.preventDefault();
      const formDate = event.target.elements.calendar.value;
      const correctFormDate = dateCorrection(formDate);
      const arrClients = createClientListByTransferMonth(correctFormDate, customers);
      clientsListMarkup = arrClients.map((client) => {
        console.log('client :>> ', client);
        return ` <li class="client">
                  <ul class="client-data-name">
                    <li>Nachname und Vorname:</li>
                    <li>Überweisungsdatum:</li>
                    <li>E-Mail-Adresse:</li>
                    <li>Adresse:</li>
                  </ul>
                  <ul class="client-data-value">
                    <li>${client.name} ${client.preName}</li>
                    <li>${client.finances.nextDebitDate}</li>
                    <li>${client.eMail}</li>
                    <li>${client.address}</li>
                  </ul>
                </li>`;
      });
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

    const deleteSubmitListenerTask_2 = () => {
      form.removeEventListener('submit', submitHandler);
      console.log('delete submitListenerTask_2');
    };

    arrFunctionsRemuveListener.push(deleteSubmitListenerTask_2);
  }
  return arrFunctionsRemuveListener;
};
