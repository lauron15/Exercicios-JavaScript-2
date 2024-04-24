var calculadora = { 
    somar: function (a,b) {
        return a + b; 
    },

    subtrair: function (a,b) {
        return a - b; 
    },

    dividir: function (a,b) {
        return a / b; 
    }, 

    multiplicar: function (a,b) {
        return a * b; 
    },

}

console.log(calculadora.somar(5,5)); 
console.log(calculadora.subtrair(10,5));
console.log(calculadora.dividir(15,3));
console.log(calculadora.multiplicar(10,10))

// dessa maneira fica mais bonito. 
//Contudo, fico bem feliz que eu entendi a lógica por trás da criação.