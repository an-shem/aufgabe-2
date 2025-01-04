import { sectionExit } from './js/section-exit';
import { sectionClos } from './js/section-clos';
import { subtask_1 } from './js/subtask-1/subtask-1';
import { subtask_2 } from './js/subtask-2/subtask-2';
import { subtask_3 } from './js/subtask-3/subtask-3';
import { subtask_4 } from './js/subtask-4/subtask-4';
import { subtask_5 } from './js/subtask-5/subtask-5';
import { subtask_6 } from './js/subtask-6/subtask-6';
import { subtask_7 } from './js/subtask-7/subtask-7';

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
          }, delaySetTimeout);
          break;
        case '2':
          setTimeout(() => {
            sectionExit(sectionOpen);
            const remuveFunction = subtask_2();
            arreyFunctionsRemuveListener.push(...remuveFunction);
          }, delaySetTimeout);
          break;
        case '3':
          setTimeout(() => {
            sectionExit(sectionOpen);
            const remuveFunction = subtask_3();
            arreyFunctionsRemuveListener.push(...remuveFunction);
          }, delaySetTimeout);
          break;
        case '4':
          setTimeout(() => {
            sectionExit(sectionOpen);
            const remuveFunction = subtask_4();
            arreyFunctionsRemuveListener.push(...remuveFunction);
          }, delaySetTimeout);
          break;
        case '5':
          setTimeout(() => {
            sectionExit(sectionOpen);
            const remuveFunction = subtask_5();
            arreyFunctionsRemuveListener.push(...remuveFunction);
          }, delaySetTimeout);
          break;
        case '6':
          setTimeout(() => {
            sectionExit(sectionOpen);
            const remuveFunction = subtask_6();
            arreyFunctionsRemuveListener.push(...remuveFunction);
          }, delaySetTimeout);
          break;
        case '7':
          setTimeout(() => {
            sectionExit(sectionOpen);
            const remuveFunction = subtask_7();
            arreyFunctionsRemuveListener.push(...remuveFunction);
          }, delaySetTimeout);
          break;

        default:
          console.log('Invalid subscription type');
      }
    }
  }
});
