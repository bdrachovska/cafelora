import './style.css';

import { Layer } from './../Layer/index.js';

export const Drink = (props) => {
  let layersHtml = '';

  props.layers.forEach((layer) => {
    layersHtml += Layer(layer);
  });

  const element = document.createElement('div');
  element.classList.add('drink');
  element.innerHTML = `<div class="drink">
  <div class="drink__product">
    <div class="drink__cup">
      <img src="/assets/cups/${props.id}.png" />
    </div>
    <div class="drink__info">
      <h3>${props.name}</h3>
      ${layersHtml}
    </div>
  </div>
  <div class="drink__controls">
    <button class="order-btn">Objednat</button>
  </div>
</div>`;

  const btn = element.querySelector('.order-btn');
  const drinkCup = element.querySelector('.drink__cup');
  btn.addEventListener('click', () => {
    props.ordered = !props.ordered;

    if (props.ordered) {
      btn.textContent = 'Objednano';
      drinkCup.classList.add('drink__cup--selected');
    } else {
      btn.textContent = 'Objednej';
      drinkCup.classList.remove('drink__cup--selected');
    }
  });
  return element;
};
