var funcionarioSalario = 5000; 
console.log("O salarío mensal do funcionário antes do reajuste era de:"+ funcionarioSalario);
var reajusteAumento = 20;
var aumento=  funcionarioSalario * reajusteAumento/100;
var salarionovo = funcionarioSalario+aumento;
console.log("O valor do novo salário é de:"+ salarionovo);
//agora com um reajuste para baixo// 
var Reajuste = 15;
var Descrescimo = funcionarioSalario * Reajuste/100; 
var total = funcionarioSalario - Descrescimo; 
console.log("O valor do salário reajustado é de:" +total);