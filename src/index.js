import './style.css';

console.log('funguju!');

const navigation = () => {
  const navigationClass = document.querySelector('nav');
  navigationClass.classList.toggle('nav-closed');
};

const btnElm = document.querySelector('#nav-btn');
btnElm.addEventListener('click', navigation);

document
  .querySelectorAll('nav a')
  .forEach((element) => element.addEventListener('click', navigation));

/**ukol 4 */

const btn = document.querySelector('.order-btn');

let ordered = false;

btn.addEventListener('click', (event) => {
  const order = document.querySelector('.drink__cup');

  if (ordered === false) {
    order.classList.add('drink__cup--selected');
    btn.textContent = 'Zrušit';
    ordered = true;
  } else {
    order.classList.remove('drink__cup--selected');
    btn.textContent = 'Objednat';
    ordered = false;
  }
});
