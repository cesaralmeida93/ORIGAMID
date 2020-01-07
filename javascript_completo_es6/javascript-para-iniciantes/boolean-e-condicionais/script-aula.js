var possuiGraduacao = false;
var possuiDoutorado = true;

if(possuiGraduacao) {
    console.log('É verdadeiro');
} else if(possuiDoutorado) {
    console.log('Possui Doutorado');
} else {
    console.log('Não possui formação');
}

var nome = '10kg' / 10;
if(nome) {
    console.log(nome);
} else {
    console.log('Nome não existe');
}

if(!possuiGraduacao) {
    console.log('Não possui graduação!');
}

var x = 10;

console.log(x !== '10');

if((5 - 5) && (5 + 5)) {
    console.log('Verdadeiro');
} else {
    console.log('Falso');
}

var condicional = (5 - 10) && (5 + 5);
if(condicional) {
    console.log('Verdadeiro', condicional);
} else {
    console.log('Falso');
}

var condicional2 = (5 - 5) || ('') || (null);
console.log(condicional2);

var corFavorita = 'Verde';

switch(corFavorita) {
    case 'Azul':
        console.log('Olhe para o Céu');
        break;
    case 'Amarelo':
        console.log('Olha para o Sol');
        break;
    case 'Verde':
        console.log('Olhe para a Floresta');
        break;
    default:
        console.log('Feche os olhos');
}