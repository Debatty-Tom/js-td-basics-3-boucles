/* BOUCLES - PRÉPA 1 : Une table de multiplication
Affichez les x premières valeurs de la table de multiplication choisie par l'utilisateur.
1. Demandez à l'utilisateur de choisir la table de multiplication qu'il souhaite afficher :
   "Quelle table de multiplication souhaitez-vous afficher ? La table de multiplication par"
2. Demandez-lui combien de valeurs il souhaite voir pour cette table :
   "Combien de valeurs souhaitez-vous afficher pour cette table ?"
3. Affichez le résultat avec un titre :
   "Voici les … premières valeurs de la table de multiplication par … :"
N.B. Faites-le de deux manières différentes :
   1°) avec une boucle FOR
   2°) avec une boucle WHILE
*/

// avec FOR
// Commencez par demander à l'utilisateur la table de multiplication souhaitée et le nombre de valeurs à afficher
// Ensuite, utilisez une boucle FOR pour calculer et afficher les x premières valeurs de la table de multiplication

// avec WHILE
// Répétez le même processus avec une boucle WHILE, en demandant à nouveau la table de multiplication et le nombre de valeurs

let multiple = prompt('Je voudrais afficher les 10 premières valeurs de la table de multiplication par');
let j = prompt('Combien de valeurs souhaitez-vous afficher pour cette table ?')
console.log(`Voici les ${j} premières valeurs de la table de multiplication par ${multiple}`);
/*for (let i = 1; i <= j; i++) {
    console.log(`${multiple} * ${i} = ${multiple * i}`);
}*/

let i = 1;
while (i <= j) {
    console.log(`${multiple} * ${i} = ${multiple * i}`);
    i++;
}