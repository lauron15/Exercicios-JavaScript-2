var sku = "35"; 
console.log(sku.padStart(7,"0"));
// console.log(sku.padStart(7,"0")); No local que está o 7. Será a quantidade de números FINAIS.
// e no local que está o "0", será o número que será adicionado. ou seja, está escrito que deveremos ter 7 caracteres, 
// contando com o valor da sku, que contam como 2 caracteres. o número final: 00000  35, podemos verificar que são 5, zeros e 2 caracteres. 

var sku = "10"; 
console.log(sku.padStart(10,"0"));