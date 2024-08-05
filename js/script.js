//Criando um array basico de Frutas

let frutas = ["banna", "laranja", "caqui", "morango", "uva"];

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