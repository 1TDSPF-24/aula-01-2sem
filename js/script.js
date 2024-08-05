console.log("Bem vindo novamente!");

//Array básico 
let frutas = ["bananas", "morangos", "uvas", "laranjas", "goiabas"]

//Visualizando o conteúdo do array
console.log(frutas);

//Tabela, índices e etc
console.table(frutas);

console.log(frutas[3]);

//Lendo array com Loop for tradicional; Percorre o loop antes de incrementar
for (let x = 0; x < frutas.length; x++) {
    console.log(frutas[x])
}

//Lendo array com Loop for of -- const elements of object -- intera e retorna o item que está no array
for (const fruta of frutas) {
    console.log("COM FOR OF", fruta);

}

//Removendo um item, do início do array com SHIFT;
frutas.shift();

//Lendo array com Loop for in -- const indice of objects -- intera e retorna o indice 
for (let indice in frutas) {
    console.log("COM FOR IN", frutas[indice]);
}

//Adicionando um novo item ao ARRAY de FRUTAS com UNSHIFT no início.
frutas.unshift("pêra");

//Lendo array com Loop FOREACH - it needs to return -- for of with an intern function    

frutas.forEach((frutaDoArray, indiceDoArray, proprioArray) => {

    if (proprioArray[4] == frutaDoArray) {
        console.log("ACHEI A FRUTA : ", frutaDoArray);
    }

    console.log("COM FOREACH", frutaDoArray);
});

//Revertendo a ordem apresentanda com REVERSE;
frutas.reverse();

frutas.push("amora");
console.log(frutas);

//ordem alfabetica
console.log(frutas.sort());