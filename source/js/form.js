const formButton = document.querySelectorAll('.form__button');

const formInputValidate = (el) => {
  const form = el.closest('.form');
  const formInput = form.querySelectorAll('.form__input');
  formInput.forEach((element) => {
    if (!element.classList.contains('.form__input--validate')) {
      element.classList.add('form__input--validate');
    }
  });
};


formButton.forEach((el) => {
  el.addEventListener('click', () => formInputValidate(el));
});

