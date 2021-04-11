const menu = document.querySelector('.menu');
menu.classList.add('ativo', 'azul');
menu.classList.remove('azul');
menu.classList.toggle('azul');
menu.classList.toggle('azul');
menu.classList.toggle('azul');

if (menu.classList.contains('azul')) {
  menu.classList.add('possui-azul');
} else {
  menu.classList.add('nao-possui-azul');
}

console.log(menu.classList);

const animais = document.querySelector('.animais');
console.log(animais.attributes);

const img = document.querySelector('img');

const srcImg = img.getAttribute('alt');

img.setAttribute('alt', 'raposa')

const possuiAlt = img.hasAttribute('alt');

console.log(possuiAlt);