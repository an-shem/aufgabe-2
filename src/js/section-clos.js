export const sectionClos = (sectionOpen, arreyFunctionsRemuveListener) => {
  sectionOpen = false;
  arreyFunctionsRemuveListener.map((item) => {
    item();
  });
  document.querySelector('.loader-beckdrop').style.display = 'flex';
  document.querySelector('.loader-beckdrop').classList.remove('loader-beckdrop-is-hidden');
  document.querySelector('.content-section').classList.remove('content-section-open');

  if (document.querySelector('#content')) {
    document.querySelector('#content').innerHTML = '';
  }
};
