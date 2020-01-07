// Crie um objeto com seus dados pessoais
// Deve possuir pelo menos duas propredades nome e sobrenome
var dadosPessoais = {
    nome: 'César',
    sobrenome: 'Almeida',
    idade: 26,
    sexo: 'M',
}

// Crie um método no objeto anterior, que mostre  seu nome completo
dadosPessoais.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`
}

// Modifique o valor da propriedade preço para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi'
}
carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador,
//preto com 10 anos, que late ao ver um homem

var cachorro = {
    raca: 'labrador',
    cor: 'preto',
    anos: 10,
    latir(pessoa) {
        if(pessoa === 'homem') {
            return 'latir';
        } else {
            return 'nada';
        }
    },
}   