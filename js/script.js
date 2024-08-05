

   //Criando um array básico de FRUTAS

   let FRUTAS = ["banana","laranja","caqui","morango","uva"];
   console.log(FRUTAS);
   console.table(FRUTAS);
   console.log(FRUTAS[3]);

   //Lendo array COM Loop FOR tradicional
   for(let x = 0; x < FRUTAS.length ; x++){
    console.log(FRUTAS[x]);
   }

   //Lendo array com Loop FOR OF

   for (const FRUTAS of FRUTAS) {
    console.log("COM FOR OF", FRUTAS);
   }

   //Lendo array com Loop FOR IN

   for (const indice in FRUTAS) {
    console.log("COM FOR IN", FRUTAS[indice]);
   }