import './style.css';

import { Layer } from './Layer/index.js';
import { Drink } from './Drink/index.js';

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

const drinkList = document.querySelector('.drinks-list');
drinkList.appendChild(
  Drink({
    id: 'romano',
    name: 'Romano',
    ordered: false,
    layers: [
      {
        color: '#fbdf5b',
        label: 'citrón',
      },
      {
        color: '#613916',
        label: 'espresso',
      },
    ],
  }),
);
