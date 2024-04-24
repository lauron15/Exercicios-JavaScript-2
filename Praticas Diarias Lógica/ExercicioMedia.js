function lerMedia (nota1,nota2,nota3) {
    var media = (nota1 +nota2 +nota3)/3; 
if(media >=7) {
console.log("Você foi aprovado, Parabéns!!");
}
else {
    console.log("Você foi reprovado!");
}
return media; 
}

var aluno1 = console.log(lerMedia(5,8,5));
var aluno2= console.log(lerMedia(10,15,21));