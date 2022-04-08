

// //*************************Les Fonctions ************************************************



// // En JavaScript, comme d'ailleurs dans tous les langages, il existe deux types de fonctions :

// // Les fonctions propres à JavaScript (appelées aussi fonctions natives). On les appelle aussi des méthodes. 
// // Elles sont associées à un objet bien particulier comme c'est le cas de la méthode alert() avec l'objet window.
// // Les fonctions que vous écrivez pour les besoins de votre script et que nous abordons dans ce cours.

// function nom_de_la_fonction(arguments) 
// {
//    //... code des instructions ...
// }

// // L'appel d'une fonction se fait simplement par le nom de la fonction (avec les parenthèses) : par exemple nom_de_la_fonction().

// // Il faudra veiller en toute logique (car l'interpréteur lit votre script de haut vers le bas) à ce que votre fonction soit bien définie avant d'être appelée.

// // On peut passer des valeurs aux fonctions JavaScript. La valeur ainsi passée sera utili-sée par la fonction.

// // Pour passer une valeur, aussi appelé paramètre ou argument à une fonction, on fournit le nom d'une variable dans la déclaration de la fonction.

// // Exemple :

// // Ecrire une fonction qui affiche un message d’alerte dont le texte peut chan-ger :

// function exemple(texte)
// {
//    alert(texte);
// }


// //On peut passer bien sûr un ou plusieurs arguments : dans ce cas ils doivent être séparés par des virgules. Les types peuvent être différents.

// /* Arguments multiples */
// function maFonction(arg1, arg2, arg3) 
// { 
//    // ... code des instructions ... 
// }

// //Et pour l'appel de la fonction :

// maFonction(arg1, arg2, arg3);




// function maFonction() 
// {
//  var plop1 = 123;       
//    return plop1;
// }

// function maFonction2() 
// {
//    plop2 = 456;     
// }

// plop1 = maFonction();

// console.log("fonction 1 / plop1 : "+plop1);

// maFonction2();

// console.log("mafonction2 > plop2 : "+plop2);



// //Une fonction peut être déclarée avec un nom précédé du mot clé var. On appelle cela une expression de fonction. On peut ensuite appeler la fonction grâce à ce nom :

// // Déclaration de la fonction carre() :
// var carre = function(nombre)
// {
//     var resultat = nombre*nombre;
// }

// // Appel de la fonction carre() :
// var k = carre(2);



// //Récursivité
// //Une fonction peut faire référence à elle-même et s'appeler elle-même. Une fonction qui s'appelle elle-même est appelée une fonction récursive. Sous certains aspects, une récursion est semblable à une boucle : toutes les deux exécutent le même code plusieurs fois et toutes les deux requièrent une condition d'arrêt (pour éviter une boucle ou une récursion infinie).

// //Par exemple, ce code utilise une boucle :

// var x = 0;

// while (x < 5) 
// {
//     console.log("x : "+x);
//     x++;
// }


// //On pourra convertir ce code en une fonction récursive de la façon suivante :

// function boucle(x) 
// {
//     if (x >= 10) 
//     { 
//         return; 
//     }

//     console.log("x : "+x);

//     boucle(x + 1); // appel récursif
// }

// boucle(0); // appel initial de la fonction







//******************** Cours Youtube *************************************** */




// function somme (nombre1, /* Parametre 1 */ nombre2 /* Parametre 2 */) 
// {

//    alert ( nombre1 + nombre2);  // Cette fonction affiche uniquement le résultat de la somme.

// }

// somme (6 /* Argument 1 */, 14 /* Arguement 2 */);

 
// function somme (nombre1, nombre2) 
// {
//    var  resultat = nombre1 + nombre2; // Sauvegarder l'inofrmation dans la variable  

//    alert ( resultat);  
   
// }

// somme (6, 14);




function somme (nombre1, nombre2) 
{
   
   return nombre1 + nombre2 // Quitter la fonction et renvoyer une information 

}

var res = somme (6, 14) // Mettre dans la variable 'res' le retour de la fonction somme (6,14)
console.log(res);






function function_parente() 
{
 
   var data = 16;

   function function_imbriqué() 
   {
    
      document.write (data);
   }

   function_imbriqué(); // Appel de la fonction

}

function_parente(); //Appel de la fonction // N'afficherra pas la function-imbriqué car n'est pas dans sa portée
function_imbriqué  // Tentative d'appel de la fonction // Ne reconnait même pas la fonction car encore moins à sa portée


//Une fonction imbriqué (CLOSURE  ou FERMETURE) à accès aux informations (variables...) de sa fonction parente, celle qui l'a crée.




// Expression de fonction :

// let hey = function hello_world() // let = var  // On affacte une fonction dans une variable 

// {
//   document.write ("hello world !")
// }

// hey(); // Appel de la fonction depuis la variable 