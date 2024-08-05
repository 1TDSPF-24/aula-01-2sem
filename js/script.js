console.log("Bem vindo novamente!");

//Array básico de frutas

let frutas = ["banana", "laranja", "caqui", "morango", "uva"];
console.log(frutas)
console.table(frutas)
console.log(frutas[0])

frutas.push("melancia");

//lendo array com loop FOR
for (let x = 0; x < frutas.length; x++) {
    console.log(frutas[x]);
}

//lendo array com loop FOR OF
for (const fruta of frutas) {               //fruta = variavel qualquer
    console.log("com FOR OF", fruta);
}

//lendo array com loop FOR IN
for (const indice in frutas) {
    console.log("com FOR IN", frutas[indice]);
}

//lendo array com loop FOR EACH
frutas.forEach((frutaDoArray, indiceDoArray, proprioArray) => {
    if (proprioArray[4] = frutaDoArray) {
        console.log("ACHEI A FRUTA", frutaDoArray)
    }
    console.log("com FOREACH", frutaDoArray);
})


