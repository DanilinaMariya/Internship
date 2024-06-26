const menuButton = document.querySelector('.header__button');
const menuNav = document.querySelector('.header__nav');
const submenuButton = document.querySelectorAll('.submenu__button');
const submenuLink = document.querySelectorAll('.submenu__link');
const navLink = document.querySelectorAll('.nav__link');
const body = document.querySelector('body');

const menuOpen = () => {
  menuButton.classList.remove('header__button--activ');
  menuNav.classList.remove('header__nav--activ');
  body.classList.remove('overfloy');
  menuNav.style.height = '0';
};

const onMenuButtonClick = () => {
  if (menuButton.classList.contains('header__button--activ')) {
    menuOpen();
  }else {
    menuButton.classList.add('header__button--activ');
    menuNav.classList.add('header__nav--activ');
    body.classList.add('overfloy');
    menuNav.style.height = `${menuNav.scrollHeight}px`;
    submenuLink.forEach((element) => {
      element.setAttribute('tabindex', '-1');
    });
  }
};

const onSubmenuButtonClick = (el) => {
  const submenu = el.closest('.submenu');
  const submenuList = submenu.querySelector('.submenu__list');

  if (submenuList.classList.contains('submenu__list--activ')) {
    submenuList.classList.remove('submenu__list--activ');
    submenuList.style.height = '0';
    submenuList.style.marginTop = '0';
    submenu.classList.remove('submenu--activ');
    submenuLink.forEach((element) => {
      element.setAttribute('tabindex', '-1');
    });
  }else {
    submenuList.classList.add('submenu__list--activ');
    submenu.classList.add('submenu--activ');
    submenuList.style.height = `${submenuList.scrollHeight}px`;
    submenuList.style.marginTop = '20px';
    submenuLink.forEach((element) => {
      element.setAttribute('tabindex', '0');
    });
  }
};

const onDocumentClick = (evt) => {
  if (menuButton.classList.contains('header__button--activ')) {
    if(((evt.target).closest('nav') === null) & ((evt.target).closest('button') === null)) {
      menuOpen();
    }
  }
};

const onNavLinkClick = () => {
  menuOpen();
};

submenuButton.forEach((el) => {
  el.addEventListener('click', () => onSubmenuButtonClick(el));
});

menuButton.addEventListener('click',onMenuButtonClick);

document.addEventListener('click', onDocumentClick);

navLink.forEach((el) => {
  el.addEventListener('click', onNavLinkClick);
});
