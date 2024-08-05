//Criando um array básico de FRUTAS
let frutas = ["banana", "laranja", "caqui", "morango", "uva"];

//Visualizando o conteúdo do array!
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
    console.log("COM FOR OF", frutas[indice]);
}

//Lendo array com Loop FOR EACH
frutas.forEach(function (valorDoArray, indice, proprioArray) {

    if (proprioArray[indice] == valorDoArray) {
        console.log("ACHEI A FRUTA : ", valorDoArray);
    }

    console.log("COM FOR EACH", fruta);
}
);

//Adicionando um novo item ao ARRAY de FRUTAS com PUSH.
frutas.push("melancia");

//Lendo array com Loop FOR OF

for (const fruta of frutas) {
    console.log("COM FOR OF", fruta);
}

//Adicionando um novo item ao ARRAY de FRUTAS com UNSHIFT no início.
frutas.unshift("pêra");

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
for (const fruta of frutas) {
    console.log("COM FOR OF", fruta);
}