var comidas = ["melao", "maça", "banana"];
console.log(comidas);
var comidaremovida = comidas.shift();
console.log(comidas);

comidas.unshift('laranja'); // Não devo utilizar o "=" no unshift
console.log(comidas); 
console.log(comidas[0]); 