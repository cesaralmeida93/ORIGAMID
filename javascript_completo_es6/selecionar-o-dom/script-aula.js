const animais = document.getElementById('animais');
console.log(animais);

const naoExiste = document.getElementById('naoexiste');
console.log(naoExiste);

const gridSection = document.getElementsByClassName('grid-section');
console.log(gridSection[0]);

const ul = document.getElementsByTagName('ul');
console.log(ul);

const primeiraLi = document.querySelector('li');
console.log(primeiraLi);

const primeiraUl = document.querySelector('ul');
console.log(primeiraUl);

const linkInterno = document.querySelector('[href^="#"]');
console.log(linkInterno);

const ultimoItem = document.querySelector('.animais-lista li:last-child');
console.log(ultimoItem);

const animaisImg = document.querySelectorAll('.animais img');
console.log(animaisImg);

const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

primeiraUl.classList.add('grid-section');

console.log(gridSectionHTML);
console.log(gridSectionNode);

gridSectionNode.forEach(function(item, index){
  console.log(item);
});

const arrayGrid = Array.from(gridSectionHTML);

arrayGrid.forEach(function(item) {
  console.log(item);
});