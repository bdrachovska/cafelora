import './style.css';

import { Layer } from './Layer/index.js';

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

/**ukol 5

const drinkInfoElm = document.querySelector('.drink__info');
drinkInfoElm.innerHTML += Layer({
  color: '#feeeca',
  label: 'mléčná pěna',
});

drinkInfoElm.innerHTML += Layer({
  color: '#fed7b0',
  label: 'teplé mléko',
});
drinkInfoElm.innerHTML += Layer({
  color: '#613916',
  label: 'espresso',
});
*/

const layers = [
  {
    color: '#feeeca',
    label: 'mléčná pěna',
  },
  {
    color: '#fed7b0',
    label: 'teplé mléko',
  },
  {
    color: '#613916',
    label: 'espresso',
  },
];

let layersHtml = '';

layers.forEach((layer) => {
  layersHtml += Layer(layer);
});

document.querySelector('.drink__info').innerHTML += layersHtml;
