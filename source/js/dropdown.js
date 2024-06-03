const formCity = document.querySelectorAll('.form__input--city');
let formItem;
let dropdown;
let dropdownItem;

const formCityClose = () => {
  formItem.classList.remove('form__item--open-dropdown');
  dropdown.style.height = '0';
  dropdownItem.forEach((element) => {
    element.removeAttribute('tabindex');
  });
};

const formCityOpen = () => {
  formItem.classList.add('form__item--open-dropdown');
  dropdown.style.height = `${dropdown.scrollHeight}px`;
  dropdownItem.forEach((element) => {
    element.setAttribute('tabindex', '0');
  });
};

const onFormItemClick = (element) => {
  dropdownItem.forEach((el) => {
    el.classList.remove('form__dropdown-item--activ');
  });
  const content = element.textContent;
  element.classList.add('form__dropdown-item--activ');
  const formInput = formItem.querySelector('.form__input');
  formInput.textContent = content;
  formInput.value = content;
  formCityClose();
};

const omFormCityClick = (el) => {
  formItem = el.closest('.form__item');
  dropdown = formItem.querySelector('.form__dropdown');
  dropdownItem = dropdown.querySelectorAll('.form__dropdown-item');
  if(formItem.classList.contains('form__item--open-dropdown')){
    formCityClose();
  }else{
    formCityOpen();
  }

  dropdownItem.forEach((element) => {
    element.addEventListener('click', () => onFormItemClick(element));
  });
};

formCity.forEach((el) => {
  el.addEventListener('click', () => omFormCityClick(el));
});
