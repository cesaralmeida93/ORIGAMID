// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu');
const copy = document.querySelector('.copy');

const copiaMenu = menu.cloneNode(true);
copy.appendChild(copiaMenu);

// Selecione o primeiro DT da dl de Faq
const dl = document.querySelector('dl');
const primeiroDT = dl.firstElementChild;

// Selecione o DD referente ao primeiro DT
const proximoDD = primeiroDT.nextElementSibling;

// Substitua o conteúdo html de .faq pelo de .animais
const faq = document.querySelector('.faq');
const animais = document.querySelector('.animais');

faq.innerHTML = animais.innerHTML;