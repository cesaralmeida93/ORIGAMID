const listaAnimais = document.querySelector('.animais-lista');

console.log(listaAnimais.clientHeight);
console.log(listaAnimais.offsetHeight);
console.log(listaAnimais.scrollHeight);
console.log(listaAnimais.clientWidth);
console.log(listaAnimais.offsetWidth);
console.log(listaAnimais.scrollWidth);

const animaisTop = listaAnimais.offsetTop;
console.log(animaisTop);

const primeiroh2 = document.querySelector('h2');
const h2left = primeiroh2.offsetLeft;
console.log(h2left);

const rect = primeiroh2.getBoundingClientRect();
console.log(rect);

console.log(
  window.innerWidth,
  window.innerHeight,
  window.outerWidth,
  window.outerHeight,
  window.pageYOffset,
  window.pageXOffset
)

const small = window.matchMedia('(max-width: 400px)');
console.log(small.matches);