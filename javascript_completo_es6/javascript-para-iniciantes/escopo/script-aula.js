var carro = 'Fusca';

function mostrarCarro() {
    var frase = `Meu carro é um ${carro}`;
    console.log(frase);
}

mostrarCarro(); // Meu carro é um Fusca
console.log(carro); // Fusca

let mes = 'Dezembro';
if(true) {
    
    console.log(mes);
}

console.log(mes);


// for(let i = 0; i < 10; i++) {
//     console.log(`Número ${i}`);
// }

// console.log(i); //i is not defined

const semana = 'Sexta';

const data = {
    ano: 2020,
    mes: 'Janeiro',
}

data.ano = 2019;

data.dia = 25;