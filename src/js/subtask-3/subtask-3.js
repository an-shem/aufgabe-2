import { customers } from '../customers';
import { sectionLayoutTask_3 } from './subtask-3-initial-section-layout';
import { getEmailByName } from '../get-email-by-name';
import { getNamesAllClients } from '../get-names-all-clients';

export const subtask_3 = () => {
  const arrFunctionsRemuveListener = [];

  if (document.querySelector('#content')) {
    document.querySelector('#content').innerHTML = sectionLayoutTask_3;
  }

  if (document.querySelector('#clientsNameListe')) {
    const arrNamesAllClients = getNamesAllClients(customers);
    const markup = arrNamesAllClients.map((name) => `<option>${name}</option>`);
    document.querySelector('#clientsNameListe').innerHTML = markup.join('');
  }

  if (document.querySelector('.clients-form')) {
    const form = document.querySelector('.clients-form');
    const submitHandler = (event) => {
      event.preventDefault();
      const clientName = event.target.elements.clientName.value;
      const eMail = getEmailByName(clientName, customers);

      const pName = document.querySelector('.client-name');
      const aMail = document.querySelector('.client-e-mail');
      const clientsListTitel = document.querySelector('.solution-titel');

      if (clientsListTitel) {
        clientsListTitel.style.display = 'block';
      }
      pName.textContent = `${clientName}:`;
      aMail.setAttribute('href', `mailto:${eMail}`);
      aMail.textContent = eMail;
      if (document.querySelector('.client-data')) {
        document.querySelector('.client-data').style.display = 'flex';
      }
    };

    form.addEventListener('submit', submitHandler);

    const deleteSubmitListenerTask_3 = () => {
      form.removeEventListener('submit', submitHandler);
    };

    arrFunctionsRemuveListener.push(deleteSubmitListenerTask_3);
  }
  return arrFunctionsRemuveListener;
};
