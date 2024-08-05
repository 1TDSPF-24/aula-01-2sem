//Criando um array basico de Frutas

let frutas = ["uva", "caqui", "banana", "laranja", "morango"];

//visualizando o conteudo do array
console.log(frutas);
console.table(frutas);
console.log(frutas[3]);

//Lendo array com Loop FOR TRADICIONAL
for (let x = 0; x < frutas.length; x++) {
    console.log(frutas[x]);
}

//Lendo array com Loop FOR OF

for (const fruta of frutas) {
    console.log("COM FOR OF", fruta);
}

//Lendo array com Loop FOR IN

for (const indice in frutas) {
    console.log("COM FOR IN", frutas[indice]);
}

//Lendo array com Loop FOREACH

frutas.forEach((frutaDoArray, indiceDoArray, proprioArray) => {

    if (proprioArray[4] == frutaDoArray) {
        console.log("ACHEI A FRUTA : ", frutaDoArray);
    }

    console.log("COM FOREACH", frutaDoArray);
});

//Adicionando um novo item ao ARRAY de FRUTAS com PUSH no final.
frutas.push("melancia");

//Lendo array com Loop FOR OF

for (const fruta of frutas) {
    console.log("COM FOR OF", fruta);
}

//Adicionando um novo item ao ARRAY de FRUTAS com UNSHIFT no início.
frutas.unshift("pêra");

//Lendo array com Loop FOR OF

for (const fruta of frutas) {
    console.log("COM FOR OF", fruta);
}

//Removendo um item, do final do array com POP;
frutas.pop();
//Lendo array com Loop FOR OF
for (const fruta of frutas) {
    console.log("COM FOR OF", fruta);
}

//Removendo um item, do inicio do array com SHIFT;
frutas.shift();
//Lendo array com Loop FOR OF
for (const fruta of frutas) {
    console.log("COM FOR OF", fruta);
}

//Colocando em ordem alfabética com SORT;
frutas.sort();
//Lendo array com Loop FOR OF
for (const fruta of frutas) {
    console.log("COM FOR OF", fruta);
}

//Revertendo a ordem apresentanda com REVERSE;
frutas.reverse();
//Lendo array com Loop FOR OF
console.log("_________");
for (const fruta of frutas) {
    console.log("COM FOR OF", fruta);
}