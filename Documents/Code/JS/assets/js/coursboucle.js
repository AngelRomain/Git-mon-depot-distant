console.log("============ FOR =================");
// ********************************************
// ********************  FOR  *****************


console.log("Table de multiplication par 2");


// for (valeur initiale; condition; actualisation) 
// {
//     instructions;
// }


for (i=0; i<=10; i++)
{
    resultat = 2 * i;

    console.log("2 * "+i+" = "+resultat);
}

// instructions exécutées après le for (i vaut 10)
console.log("fin de la boucle");






console.log("============ WHILE =================");
// ********************************************
// *****************  WHILE  ******************


// while (condition vraie) 
// {
//     // instructions
// }


var i = 0;

console.log("Table de multiplication par 5");

while (i <= 10) 
{   
    // Exécute le calcul et stocke le résultat   
    // dans une variable nommée ‘resultat’  
    resultat = 5 * i;

    // A chaque tour, on affiche le résultat courant à l’utilisateur
    console.log("Le résultat de 5 x "+i+" est : "+resultat);

    // A chaque tour, on ajoute +1 à la variable i  
    i++; 
}

// instructions exécutées après le for (i vaut 10)
console.log("fin de la boucle");





console.log("============= BREAK ================");
// ********************************************
// *****************  BREAK  ******************


cpt = 1;

while (cpt<8) 
{
    if (cpt==5) 
    {
        break;
    } 

    console.log("ligne : "+cpt);
    cpt++;
}

console.log("fin de la boucle");




console.log("=========== CONTINUE ==================");
// ********************************************
// **************  CONTINUE  ******************



var cpt1 = 1;

while (cpt1 < 7) 
{
    if (cpt1 == 3)
    {
        cpt1++
        continue;
    }

    console.log("ligne : "+cpt1);
    cpt1++;
}

console.log("fin de la boucle");




console.log("========= DO .... WHILE  ================");
// *********************************************
// **************  DO ... WHILE ****************


// do 
// {
//     instructions;
// } while (condition);


var j=0

console.log("Table de multiplication par 5");

do 
{   
    resultat = 5 * j;

    console.log("5 * "+j+" = "+resultat);

    j++;
} while (j <= 10) ;

// instructions exécutées après le for (j vaut 10)
console.log("fin de la boucle");




console.log("========= FOR ... IN ================");
// *********************************************
// **************  FOR ... IN ******************


var tableau = ["Paul", "Pierre", "Anne", "Sophie"];

for (var i in tableau) 
{
    console.log(tableau[i]);
}