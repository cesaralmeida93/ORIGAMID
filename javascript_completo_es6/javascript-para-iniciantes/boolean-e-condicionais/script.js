// Verifique se a sua idade é maior do que a de algum parente
// Dependendodo resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var minhaIdade = 26;
var idadeParente = 50;
if(minhaIdade > idadeParente) {
    console.log(`minha idade de ${minhaIdade} é maior que a idade do meu parente de ${idadeParente}`);
} else if(minhaIdade === idadeParente) {
    console.log('É igual');
} else {
    console.log(`a idade do meu parente de ${idadeParente} é maior que a minha idade de ${minhaIdade}`);
}

// Qual valor é retornadona seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao);

// Verifique se as seguintes variáveissão Truthy or Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);

// Compare o total de habitantes do Brasilcom China (valor em milhões)
var brasil = 207;
var china = 1340;

if(brasil > china) {
    console.log('Brasil tem mais habitantes');
} else {
    console.log('China tem mais habitantes');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
    console.log('Verdadeiro');
} else {
    console.log('Falso');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
    console.log('Gato' && 'Cão');
} else {
    console.log('Falso');
}


