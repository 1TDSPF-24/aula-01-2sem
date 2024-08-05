

//Criando um array básico de FRUTAS

let frutas = ["banana", "laranja", "caqui", "morango", "uva"];

//Visualizando o conteúdo do array!
console.log(frutas);
console.table(frutas);
console.log(frutas[3]);

//lendo array com loop FOR
for (let x = 0; x < frutas.length; x++) {
    console.log(frutas[x]);
}

//lendo array com loop FOR OF 

for (const fruta of frutas) {
    console.log(frutas[x]);
}


// lendpo array com loop FOR IN

for (const indice in frutas) {
    console.log("COM FOR IN", frutas[indice]);
}

//lendo array com loop FOREACH

frutas.forEach((frutaDoArray, indiceDoArray, proprioArray) => {

    if (proprioArray[4] == frutaDoArray) {
        console.log("ACHEI A FRUTA : ", frutaDoArray);
    }

    console.log("COM FOREACH", frutaDoArray);
});