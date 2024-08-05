//Criando um array básico de FRUTAS

let frutas = ["banana", "laranja", "caqui", "morango", "uva"];

//vizualizando o conteudo do array

console.log(frutas);
console.table(frutas);
console.log(frutas[3]);

//Lendo array com Loop FOR

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