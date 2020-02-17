const menu = document.querySelector('.menu');
 
menu.classList.add('ativo', 'teste');
menu.classList.remove('azul');

if(menu.classList.contains('azul')) {
    menu.classList.add('possui-azul');
} else {
    menu.classList.add('nao-possui-azul');
};

menu.className += ' vermelho';

console.log(menu.className);

const animais = document.querySelector('.animais');
console.log(animais.attributes);

const img = document.querySelector('img');
img.setAttribute('alt', 'É uma Raposa');

console.log(img.getAttribute('alt'));
console.log(img.hasAttribute('alt'));