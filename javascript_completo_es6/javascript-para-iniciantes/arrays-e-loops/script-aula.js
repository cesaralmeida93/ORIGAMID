var videoGames = ['Switch', 'PS4', 'XBox', '3DS'];

// var ultimoItem = videoGames.pop();

for (var numero = 0; numero <= 4; numero++) {
    console.log(numero);
}

var i = 0;
while (i < 10) {
    console.log(i);
    i = i + 5;
}

var frutas = ['Banana', 'Maçã', 'Pera', 'Abacaxi', 'Uva'];

for (var item = 0; item < videoGames.length; item++) {
    console.log(videoGames[item]);
    if(videoGames[item] === 'PS4') {
        break
    }
}

frutas.forEach(function(fruta, index, ajsiodjasd) {
    frutas.pop();
    console.log(fruta, index, ajsiodjasd);
})

var numero = 0;
var maximo = 50;
for(;numero < maximo;) {
    console.log(numero);
    numero++;
}