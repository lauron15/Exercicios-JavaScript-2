function pagamentoSeguro (produto,formapagamento) {
if (formapagamento === "avista" || formapagamento === "dinheiro" || formapagamento ==="Pix") {
var desconto = produto * 0.15;
    return produto - desconto; 
}
else if (formapagamento === "avistacartao"){
    var desconto = produto * 0.10;
    return produto - desconto;
}
else if (formapagamento === "parceladocartao") {
console.log(produto + "R$ em duas vezes sem juros");
}
else if (formapagamento === "cartao3x") {
    var juros = produto * 0.10;
return produto + juros;  
} }

var produto1 = pagamentoSeguro(100,"parceladocartao");
console.log(produto1);
