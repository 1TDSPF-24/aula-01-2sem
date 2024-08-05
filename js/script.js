// Criando um array básico de frutas

let frutas = ["banana", "laranja", "caqui", "morango", "uva"];

// Vizualizando o conteúdo do array!
console.log(frutas);
console.table(frutas);
console.log(frutas[3]);

// Lendo array com loop FOR
for (let x = 0; x < frutas.length; x++) {
    console.log(frutas[x]);
}

// Lendo array com loop FOR OF
for (const fruta of fruta) {
    console.log("COM FOR OF", fruta)
}

// Lendo array com loop FOR IN
for (const indice in frutas) {
    console.log(" COM FOR IN", frutas[indice]);
}
