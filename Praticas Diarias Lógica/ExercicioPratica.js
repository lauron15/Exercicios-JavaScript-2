function somarValores (A,B) {   
return A+B; 

}

function compararValores (A,B,C) {

    if (A+B <= C){
        console.log('O valor de A+B é menor que' + " " + C);
        }
        else {
            console.log("O valor é maior que " + C);
        }
}

console.log(somarValores(10,10));
console.log(compararValores(10,10,15));