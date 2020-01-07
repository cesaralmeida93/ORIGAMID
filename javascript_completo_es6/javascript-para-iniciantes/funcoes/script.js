// Crie uma função para verificar se um valor é Truthy
function verificaValor(valor) {
    if(!!valor == true) {
        return 'Truthy';
    } else {
        return 'Falsy';
    }
}

// Crie uma função matemática que retorne o perímetrode um quadrado
// lembrando: permímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(lado) {
    return `o perímetro do quadrado é ${4 * lado}`;
}

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
    return `${nome} ${sobrenome}`;
}

// Crie uma função que verifica se um número é par
function numeroPar(numero) {
    if(numero % 2 == 0) {
        return `${numero} é par`;
    } else {
        return `${numero} é impar`;
    }
}

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function retornaTipo(parametro) {
    return typeof(parametro);
}

// addEventListener é uma função nativa do Javascript
// o primeiro parâmetro é o evento que ocorre e o segundo é o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('click', function() {
    console.log('César Augusto Santos de Almeida');
});

// Corrijao erro abaixo
var totalPaises= 193;
function precisoVisitar(paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));