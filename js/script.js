

//CRIAÇÃO DO ARRAY (Frutas)

let frutas = ["banana", "laranja", "caqui", "morango", "uva"];

//FORMAS DE MANIPULAR UM ARRAY

//Opção 1: visualizar o conteúdo em array
console.log(frutas);
//Opção 2: visualizar o conteúdo em forma de tabela
console.table(frutas);
//Opção 3: acessar as posições do array
console.log(frutas[3]);
//Opção 4: ler array com loop FOR TRADICIONAL (forma mais correta para arrays e listas)
for (let x = 0; x < frutas.length; x++) {
    console.log(frutas[x]);
} //x++ (após fazer todo o loop ele irá adicionar um em si mesmo)
//Opção 5: ler array com loop FOR OF
for (const fruta of frutas) {
    console.log("COM FOR OF", fruta);
}
//Opção 6: ler array com loop FOR IN
for (const indice in frutas) {
    console.log("COM FOR IN ", frutas[indice]);
}
//Opção 7: ler array com loop FOR EACH
// frutas.forEach(function (fruta) { //função anônima 
//     console.log("COM FOREACH", fruta);
// });

// frutas.forEach(function (valorDoArray, indice, proprioArray) { //função anônima 

//     if (proprioArray[3] == valorDoArray) {
//         console.log("ACHEI A FRUTA: ", valorDoArray);
//     }
//     console.log("COM FOREACH", valorDoArray);
// });

frutas.forEach((frutaDoArray, indiceDoArray, proprioArray) => {

    if (proprioArray[3] == frutaDoArray) {
        console.log("ACHEI A FRUTA: ", frutaDoArray);
    }
    console.log("COM FOREACH", frutaDoArray);
});

//Opção 8: adicionando novo item no Array com PUSH
frutas.push("melancia"); //adiciona o novo item no final do array

for (const fruta of frutas) {
    console.log("COM FOR OF", fruta);
}

//Opção 9: adicionar novo item no array com UNSHIFT
frutas.unshift("pera");  //adiciona item ao começo do array

for (const fruta of frutas) {
    console.log("COM FOR OF", fruta);
}

//Opção 10: remover item do final do array com POP
frutas.pop();

for (const fruta of frutas) {
    console.log("COM FOR OF", fruta);
}

//Opção 11: remover item do inicio do array usando SHIFT
frutas.shift();

for (const fruta of frutas) {
    console.log("COM FOR OF", fruta);
}

//Opção 12: colocar itens em ordem alfabetica usando SORT
frutas.sort();

for (const fruta of frutas) {
    console.log("COM FOR OF", fruta);
}

//Opção 13: inverter a ordem do array usando REVERSE
frutas.reverse();

for (const fruta of frutas) {
    console.log("COM FOR OF", fruta);
}
