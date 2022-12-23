/* Définition de variables*/

let nom = "John";
console.log("John")

//let nom = "Jane";
console.log("Jane")


/* Boucles = traitements itératifs */
let nbr = 1;
for (nbr = 1; nbr <= 10; nbr ++)
{
    console.log(nbr)
} // 1,2,3,4,5,6,7,8,9,10


/* Console.log() permis d afficher le code */

let i ="Bonjour tout le monde";
console.log("Bonjour tout le monde")// bonjour tous le monde

let sum = 3+4;
console.log(3+4)// 7

console.log("John")// John

/* Concaténation de srt */

let firstName ="John";
let lastName ="Doe";
let espace = ' '
let name = 'John'+' '+' Doe'

console.log('John'+' '+' Doe'); // John Doe

/* Conditions */

let age = 40;
if (age >= 18) {
    console.log ("vous etes majeur");
}
else{                                   // vous etes majeur
    console.log("vous etes mineur");
}

/* création et parcours d' un tableau */

let couleurs = ["rouge","vert","bleu","jaune","orange"];

for( let i = 0; i < couleurs.length; i++ ){
    let couleur = couleurs[i];
    console.log(couleur);     // rouge, vert, bleu, jaune, orange
}

/* Utilisation de Array.push() et array.pop() */

  let numbers = [1, 2, 3, 4, 5];
  numbers.push(6);
  console.log(numbers);// Array(6)[1, 2, 3, 4, 5, 6]
  
  numbers.pop(6);
  console.log(numbers);// Array(5)[1, 2, 3, 4, 5]

 /* Fonction */

 let number = 4;
 if (number % 2 == 0){
    console.log(true);
 }
 else{(number % 2 != 0)
    console.log(false);  // true
 }
/* 2 */
 
 let chifres = [1, 4, 12, 33];

let result = sum[1+4+12+33];
                                       // la fonction for me donne error

    console.log([1+4+12+33]); // Array[50]

