const aboutButton = document.querySelector('.about__button');
const modal = document.querySelector('.modal');
const modalButton = document.querySelector('.modal__button');
const body = document.querySelector('body');
const form = modal.querySelector('.modal__form');

const isEscapeKey = (evt) => evt.key === 'Escape';

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    onModalClose();
  }
};

function onModalClose () {
  body.classList.remove('overfloy');
  modal.classList.remove('modal--open');
  body.classList.remove('overfloy-modal');
  document.removeEventListener('keydown', onDocumentKeydown);
}

const onAboutButtonClick = (evt) => {
  evt.stopPropagation();
  body.classList.add('overfloy-modal');
  modal.classList.add('modal--open');
  document.addEventListener('keydown', onDocumentKeydown);
};

const onDocumentClick = (evt) => {
  if((evt.target).closest('form') === null) {
    body.classList.remove('overfloy-modal');
    modal.classList.remove('modal--open');
  }
};

aboutButton.addEventListener('click',onAboutButtonClick);
modalButton.addEventListener('click', onModalClose);
modal.addEventListener('click', onDocumentClick);
form.addEventListener('submit', onModalClose);
