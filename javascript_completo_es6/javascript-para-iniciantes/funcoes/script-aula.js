function areaQuadrado(lado) {
    return lado * lado;
}

console.log(areaQuadrado(10));

function pi() {
    return 3.14;
}
var total= 5 * pi(); // 15.7

console.log(total);

function imc(peso, altura) {// peso e altura são parâmetros
    var imc = peso / (altura * altura);
    return imc;
}

console.log(imc(80, 1.80)); // 80 e 1.80 são argumentos

function corFavorita(cor) {
    if(cor === 'azul') {
        return 'Eu gosto do céu';
    } else if (cor === 'verde') {
        return 'Eu gosto do mato';
    } else {
        return 'Eu não gosto de cores';
    }
}

function mostraConsole() {
    console.log('Oi');
}
addEventListener('click', mostraConsole);

function imc2(peso, altura) {
    const imc = peso / (altura ** 2);
    console.log(imc);
}

imc2(20, 1.8); // undefined
console.log(imc2(20, 1.8)); //retorna o imc e undefined

function terceiraIdade(idade) {
    if(typeof idade !== 'number') {
        return 'Por favor preencha um número';
    } else if(idade >= 60) {
        return true;
    } else {
        return false;
    }
}

console.log(terceiraIdade(60));

var totalPaises = 193;
function faltaVisitar(paisesVisitados) {
    return `faltam visitar ${totalPaises - paisesVisitados} países  `
}

console.log(totalPaises);

var profissao = 'Desenvolvedor';

function dados() {
    var nome = 'César';
    var idade = 26;
    function outrosDados() {
        var endereco = 'Sanja';
        var idade = 27;
        return `${nome}, ${idade}, ${endereco}, ${profissao}`;
    }
    return outrosDados();
}

console.log(dados()); // Retorna 'César, 27, Sanja, Desenvolvedor'
// outrosDados(); // retorna um erro

imc3(60, 1.60); // imc aparece no console

function imc3(peso, altura) {
    const imc3 = peso / (altura ** 2);
    console.log(imc3);
}

