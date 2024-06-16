const formButton = document.querySelectorAll('.form__button');
let form;
const phone = document.querySelectorAll('.form__input--tel');

const formInputValidate = (el) => {
  form = el.closest('.form');
  const formInput = form.querySelectorAll('.form__input');
  formInput.forEach((element) => {
    if (!element.classList.contains('.form__input--validate')) {
      element.classList.add('form__input--validate');
    }
  });
};

const onPhoneInput = (el) => {
  const inputValue = el.value;
  const inputValueArray = inputValue.split('');

  if (inputValue.length === 1) {
    el.value = '+7';
  }

  if (inputValue.length === 10 && inputValueArray[0] !== '+') {
    el.value = `+7${inputValue}`;
  }

  if (inputValue.length >= 11 && inputValueArray[0] !== '+') {
    inputValueArray[0] = '+7';
    el.value = inputValueArray.join('');
  }
};

formButton.forEach((el) => {
  el.addEventListener('click', () => formInputValidate(el));
});

phone.forEach((el) => {
  el.addEventListener('input', () => onPhoneInput(el));
});
