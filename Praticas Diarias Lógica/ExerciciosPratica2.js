function parOuImpar (num) {

    if (num % 2 ===0) {
        console.log("O seu número é Par");

    }

    else {
        console.log("O seu número é impar");
    }
}

function negativoPositivo(num) {
    if (num <=0) {
        console.log("O seu número é negativo");
    }
    else {
        console.log("O seu número é Positivo");
    }
}

console.log(parOuImpar(10));
console.log(parOuImpar(5));
console.log(negativoPositivo(-2));