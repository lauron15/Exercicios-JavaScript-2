function calcularImc(peso,altura) { 
var imc= peso / altura**2;

if (imc < 18.5) {
    console.log("Você está abaixo do peso");
} 
else if (imc > 18.5 && imc < 24.9) {
    console.log("Peso ideal (parabéns)");
}

else if (imc > 25 && imc < 29.9) {
    console.log("Levemente acima do peso");
}

else if (imc > 30 && imc < 34.9) {
    console.log(" Obesidade grau I ");
}
else if (imc > 35 && imc < 39.9) {
    console.log("Obesidade grau II (severa)");
}
else if (imc >=40) {
    console.log("Obesidade grau III (mórbida)");

}
return imc; 
}

var aluno1=console.log(calcularImc(80,1.5));
