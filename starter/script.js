/*
let age = parseInt(prompt('donnes moi ton âge ( cela doit être un nombre'));
for (age<1 || age === isNaN(age) ; age++) {
        Number(prompt('Donnes moi ton âge ( cela doit être un nombre'));
}
*/

/*
let age = parseInt(prompt('donnes moi ton âge ( cela doit être un nombre')); age < ; age++);
while (age<1 || age === isNaN(age)) {
    Number(prompt('Donnes moi ton âge, cette fois ci donne moi vraiment un nombre'));
    age++;
}
*/
let jour;
let mois;
let annee;
let isValid = true;
do {
    jour = parseInt(prompt('indiquez le jour de naissance'));
    mois = parseInt(prompt('indiquez le mois de naissance'));
    annee = parseInt(prompt('indiquez l\’année de naissance'));

    if (annee<0) {
        isValid = false;
    }
    if ((mois>12)||(mois<0)) {
        isValid=false;
    }
    if ((jour<0)||(jour>31)) {
        isValid=false;
    }
    switch (mois) {
        case 2:
            if ((annee % 4 === 0 && !(annee % 100 === 0)) || (annee % 400 === 0)) {
                if (jour > 29) {
                    isValid = false;
                }
            } else {
                if (jour > 28) {
                    isValid = false;
                }
            }
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            if (jour > 30) {
                isValid = false;
            }
            break;
    }

    if (isValid) {
        switch (mois) {
            case 1:
                break;
            case 2:
                break;
            case 3:
                break;
            case 4:
                break;
            case 5:
                break;
            case 6:
                break;
            case 7:
                break;
            case 8:
                break;
            case 9:
                break;
            case 10:
                break;
            case 11:
                break;
            case 12:
                break;
        }
    }
} while (isValid)
