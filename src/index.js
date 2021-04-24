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
