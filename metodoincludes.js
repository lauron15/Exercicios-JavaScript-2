var pessoas = ["Maria", "Felipe", "Regis", "Matheus", "Andreza" ,"Esther"];
console.log(pessoas.includes("Jeverson")); 
console.log(pessoas.includes("Felipe"));

// o método includes, vai realizar uma verificação no meu array. Se o que eu buscar no meu array for verdadeiro, retornamos o true, e se for falso, retornamos o false.
// nesse exemplo acima, não possuímos o Jeverson na equipe, logo o array vai retornar um false. E na segunda verificação, o Felipe, se encontra na équipe, 
// logo retornaremos o true. 