export const sectionExit = (sectionOpen) => {
  sectionOpen = true;
  document.querySelector('.content-section').classList.add('content-section-open');
  setTimeout(() => {
    document.querySelector('.loader-beckdrop').classList.add('loader-beckdrop-is-hidden');
    setTimeout(() => {
      document.querySelector('.loader-beckdrop').style.display = 'none';
    }, 2000);
  }, 5000);
};
