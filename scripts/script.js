const openModalButton = document.querySelector('.booking__button');
const modal = document.querySelector('.modal');
const closeModalButton = document.querySelector('.modal__close-button');

openModalButton.addEventListener('click', () => {
  modal.classList.add('modal--show');
});

closeModalButton.addEventListener('click', () => {
  modal.classList.remove('modal--show');
});
