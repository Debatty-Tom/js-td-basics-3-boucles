/*****************************
* 6. BOUCLES ET ITÉRATIONS
* BOUCLE = STRUCTURE DE CONTRÔLE N° 2 = MOYEN DE RÉPÉTER DES INSTRUCTIONS
*/

/*
EXEMPLE 3 :
- Affichez les nombres pairs entre 0 et 20
*/

// 1. Initialisez une variable nommée 'nombre' à 0 pour représenter les nombres que vous allez afficher.

// 2. Utilisez une boucle 'while' pour répéter les instructions suivantes tant que 'nombre' est inférieur ou égal à 20 :
//    - Affichez 'nombre' dans la console si 'nombre' est un nombre pair.
//    - Incrémentez 'nombre' pour passer au nombre suivant.
let i = 0;
while (i <= 20) {
    if (i % 2 === 0) {
        console.log(`${i} est un nombre pair`)
    }
    i++;
}