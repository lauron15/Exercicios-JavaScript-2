class calculadora {
    constructor () {
    }
    somar(num,Num) {
        return num+Num;
    }
    dividir (num,Num) {
return num / Num; 
    }
    multiplicar (num,Num) {
return num * Num; 
    }
    verificarBoolean (num,Num) {
        if (num && Num >=15) {
            return true;
       
    }
    else {
        return false; 
    }
}
}

var calculo1 = new calculadora; 
console.log(calculo1.somar(10,15));
console.log(calculo1.dividir(25,30));
console.log(calculo1.multiplicar(10,8)); 
console.log(calculo1.verificarBoolean(20,20));
console.log(calculo1.verificarBoolean(10,2));
