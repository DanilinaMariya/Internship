const faq = document.querySelectorAll('.faq__visible');

const onFaqClick = (el) => {
  const faqBox = el.closest('.faq__content');
  if(faqBox.classList.contains('faq__content--open')) {
    faqBox.classList.remove('faq__content--open');
  }else {
    faqBox.classList.add('faq__content--open');
  }
};

faq.forEach((el) => {
  el.addEventListener('click', () => onFaqClick(el));
});
