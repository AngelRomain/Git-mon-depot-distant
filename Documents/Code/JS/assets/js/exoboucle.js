// *********************************************** */
// ********************Exercice 1 *************** */
// Créer une page HTML qui demande à l'utilisateur un prénom.
// La page doit continuer à demander des prénoms à l'utilisateur jusqu'à ce qu'il laisse le champ vide.
// Enfin, la page affiche sur la console le nombre de prénoms et les prénoms saisis.

//****** Avec la condition while *************************

// var prenom;
// var cpt = -1
// var a = 0;
// var total ="";

// // Tant que la condition  var prenom est differente de champs vide, noté (""), alors la boucle continue avec l'instruction entre {}
// while (prenom != "")
// {
//  prenom = prompt ("Entrez un prénom");
//  cpt++; 
//  a++; 
//  total = total+" "+ prenom;
//  alert ("Le prenom n° "+ a +" est "+ prenom );
// }

// alert ("vous avez entrez : " + cpt+ " prénom(s) qui est (sont): " + total);


//********* Avec la condition do ... while *****************

// var nom;
// do 
// {
//     nom = window.prompt ("entrez nom");

//     alert ("nom est "+ nom);
// } while (nom !="")




// *********************************************** */
// ********************Exercice 2 *************** */
// Ecrire un programme qui affiche les nombres inférieurs à N.


// var n = prompt ("choissis un nombre");
// var i ; 
// /* var i = tout les nombres, à partir de zéro (valeur initiale) qui seront affichés dans les (instructions) tant que i est inférieur à n (condition).
// à chaque tour de la boucle, si la condition est valide, i prend la valeur i++ (actualisation) c'est à dire +1.*/ 

// // valeur initiale représente l'initialisation des itérateurs;
// // condition représente la condition d’itération;
// // actualisation représente l'actualisation des itérateurs;


// for (var i=0; /* <-- valeur initiale (point de depart) */ i<n; /*  <-- condition (point d'arriver) */ i++ /* <-- actualisation (nombre de pas) */)
// {
    
//     /*instructions*/
//     console.log( "les nombres plus petits que n sont: "+ i);

// }

// // instructions exécutées après le for (i = n)

// console.log("fin de la boucle");
 


// *********************************************** */
// ********************Exercice 3 *************** */
//Ecrire un programme qui saisit des entiers et en affiche la somme et la moyenne (on arrête la saisie avec la valeur 0).


// var a = parseInt(prompt ("choissis un nombre")); // nombres entiers
// var som=0; // somme
// var moy=0; // moyenne
// var saisie= 0; //nombre de a saisis

// while (a != 0) 
// {
//     saisie++ // incrémentation, la saisie prend +1 à chaque tour de la boucle
//     a= parseInt (prompt ("encore")) // si a != 0 on reecrit un nombre
//     som = som +a  // calcul de la somme 
//     moy = som /saisie // calcul de la moyenne
//     console.log(som); // afficher la somme 
//     console.log(moy); // afficher la moyenne
//     console.log(saisie); // afficher le nombre de saisie 
// }




// *********************************************** */
// ********************Exercice 4 *************** */
//Ecrire un programme qui calcule les N premiers multiples d'un nombre entier X, N et X étant entrés au clavier.

//****** Avec la condition for *************************


// var x = parseInt (prompt ("choisir une table de multiplication"))
// var n = parseInt (prompt("jusqu'à combien "+x+ " doit être multiplié?" ))
// var i = 1; //nombres de tour
// var r; // resultat
// for (i=1; /* <-- valeur initiale */ i<=n; /*  <-- condition*/ i++ /* <-- actualisation*/) 
// {
//     /*instructions*/
//     r = x*i
//     console.log(r)
//     alert (r)
// }

//****** Avec un break *************************


// var x = parseInt (prompt("choissis un nombre" ))
// var n = parseInt (prompt("jusqu'à combien "+x+ " doit être multiplié?" ))
// var i = 1; //nombres de tour
// var r; // resultat

// for (i=1; i<=n;i++) {
//     r= i * x;
//     if (i==n) {
//         break
        
//     }
//     console.log(r);
// }







// *********************************************** */
// ********************Exercice 5 *************** */
//Ecrire le programme qui compte le nombre de voyelles d’un mot saisi au clavier, en utilisant :
// myVar.length : retourne le nombre de lettres de la chaîne myVar.
// myVar.substring(p,n) : extrait d'une chaîne donnée une sous-chaîne de n caractères à partir de la position p 
// (attention, en Javascript, le 1er caractère se trouve à la position 0)
// myVar.indexOf(chaine) : retourne le rang de la première occurrence de chaîne dans la variable myVar donnée (si non trouvé : -1).



// Création des variables 

var mot;
var i;
var cpt = 0;
var lettre;


mot = prompt("entrez un mot");
console.log(mot.length); // nombres de caractères dans la chaîne, ici = nombres de lettres de notre 'mot'


for (i=0; /* <-- valeur initiale (point de depart) */  i < mot.length; /*  <-- condition (point d'arriver) */ i++ /* <-- actualisation (nombre de pas) */ )   
{

   lettre = mot.substring (i,(i+1)) // A chaque tour, 'lettre' prend la valeur de la décomposition du 'mot' choisis par l'utilisateur.
                                    //La position est de 0 à 1 puis 1 à 2 puis 2 à 3 ect...


   console.log( mot.substring (i,(i+1))); // Affiche les lettres du 'mot'. Ex: maman donne 0 = (m), 1 = (a), 2 = (m), 3 = (a), 4 = (n)


   if (lettre =="a"|| lettre =="e"|| lettre =="i"|| lettre =="o"|| lettre =="u"|| lettre =="y") // Si 'lettre' contient  une ou plusieurs voyelle 
                                                                                                // (avec l'utilisation de  || = OU )
   
   {

   cpt++ // Alors le compteur prend +1 

   }

}

console.log(cpt); // Affiche  le compteur