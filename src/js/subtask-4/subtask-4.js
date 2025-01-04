import { customers } from '../customers';
import { sectionLayoutTask_4 } from './subtask-4-initial-section-layout';
import { getTopDayMonthlyTransfers } from '../get-top-day-monthly-transfers';

export const subtask_4 = () => {
  const arrFunctionsRemuveListener = [];

  if (document.querySelector('#content')) {
    document.querySelector('#content').innerHTML = sectionLayoutTask_4;
  }

  if (document.querySelector('.calendar-btn')) {
    const btn = document.querySelector('.calendar-btn');
    const clickHandler = () => {
      const day = getTopDayMonthlyTransfers(customers);

      const pData = document.querySelector('.solution-text-tag');
      const clientsListTitel = document.querySelector('.solution-titel');

      if (clientsListTitel) {
        clientsListTitel.style.display = 'block';
      }

      pData.textContent = day;
      pData.classList.add('solution-text-tag-style');
    };

    btn.addEventListener('click', clickHandler);

    const deleteSubmitListenerTask_1 = () => {
      btn.removeEventListener('click', clickHandler);
    };
    arrFunctionsRemuveListener.push(deleteSubmitListenerTask_1);
  }
  return arrFunctionsRemuveListener;
};
