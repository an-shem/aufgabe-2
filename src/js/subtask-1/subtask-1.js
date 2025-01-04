import { customers } from '../customers';
import { sectionLayoutTask_1 } from './subtask-1-initial-section-layout';
import { dateCorrection } from '../date-correction';
import { createClientListByBirthdayMonth } from '../create-clients-list-by-birthday-month';

export const subtask_1 = () => {
  let clientsListMarkup = [];
  const arrFunctionsRemuveListener = [];

  if (document.querySelector('#content')) {
    document.querySelector('#content').innerHTML = sectionLayoutTask_1;
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
      const arrClients = createClientListByBirthdayMonth(correctFormDate, customers);
      clientsListMarkup = arrClients.map(
        (client) =>
          ` <li class="client">
                  <ul class="client-data-name">
                    <li>Nachname und Vorname:</li>
                    <li>Geburtsdatum:</li>
                    <li>E-Mail-Adresse:</li>
                    <li>Adresse:</li>
                  </ul>
                  <ul class="client-data-value">
                    <li>${client.name} ${client.preName}</li>
                    <li>${client.birthDate}</li>
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

    const deleteSubmitListenerTask_1 = () => {
      form.removeEventListener('submit', submitHandler);
    };

    arrFunctionsRemuveListener.push(deleteSubmitListenerTask_1);
  }
  return arrFunctionsRemuveListener;
};
