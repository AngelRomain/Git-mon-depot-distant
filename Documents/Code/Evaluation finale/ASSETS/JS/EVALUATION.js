//****************************************************************** */
//****************** Evaluation ************************************ */









//********** Exercice 1 **************** */
// Il s'agit de dénombrer les personnes d'âge strictement inférieur à 20 ans, les personnes d'âge strictement supérieur à 40 ans 
// et celles dont l'âge est compris entre 20 ans et 40 ans (20 ans et 40 ans y compris).
// Le programme doit demander les âges successifs.
// Le comptage est arrêté dès la saisie d'un centenaire. Le centenaire est compté.
// Donnez le programme Javascript correspondant qui affiche les résultats.



// var a = [];
// var b = [];
// var c = [];
// var age;
// var i =0;


// age = parseInt (prompt ("Quel est vôtre âge?")); 


// for (i=0; age <100; i++) 
// { 
//     age = parseInt (prompt ("Quel est vôtre âge?"));

//     if (age <= 20) 
//     {

//     a [i]= age;

//     }

//         else if (age >= 40) 
//         {

//         b [i] = age;

//         }

//             else 
//             {

//             c [i]= age;

//             }

// }


// console.table(a);
// console.table(b);
// console.table(c);


  







//********** Exercice 2 ************************** *
// Ecrivez une fonction qui affiche une table de multiplication.
// Votre fonction doit prendre un paramètre qui permet d'indiquer quelle table afficher.


function table1(n) //(n) = le parametre
{     
   
   for (var i=0; i<10 ;i++) 
   {
  
      var resultat = n * i;
      document.write( n + " * " + i + " = " + resultat + "<br>" );
   }


//return resultat
 
}

nb =parseInt(prompt ("choisir une table de multiplication"));
table1(nb); // (nb) = l'argument




//********** Exercice 3 ************************** *
// Un prénom est saisi au clavier. On le recherche dans le tableau tab donné ci-après.
// Si le prénom est trouvé, on l'élimine du tableau en décalant les cases qui le suivent, et en mettant à blanc la dernière case. 
// Si le prénom n'est pas trouvé un message d'erreur apparait et aucun prénom ne se supprime.

 var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];

 console.log(tab.indexOf("Salem")) // l'index est la position d'un des éléments du tableaux (avec 0 en position 1)


 