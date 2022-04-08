//Lorsqu’on a déclaré un tableau vide, on le remplit en assignant une valeur à la position souhaitée :

// var array = [];
// array [0] = ["pomme"];  
// array [1] = ["poire"];  
// array [2]= ["banane"]

// console.log(array);

// //Sans assigner de valeur, la position est de gauche à droite ( pomme = 0, poire =1 ect...)

// var array = ["pomme", "poire", "banane", "fraise", "abricot","citron"];


// console.log(array);


// // La fonction length (= longueur) retourne le nombre d’éléments dans un tableau :
// var nb = array.length ;
// console.log("Le tableau contient "+nb+ "éléments"); // Affiche : 6



// // Les boucles for et foreach permettent, combinées à la fonction length() de parcourir un ta-bleau :
// // on va passer autant de fois que le tableau contient des éléments, c’est-à-dire tant qu’on n’a pas atteint la longueur du tableau :

// for (var i = 0; i < array.length; i++) 
// {
//    console.log("Fruit : "+array[i]);
// }

// // Il s’agit ici d’une boucle for tout à fait banale mais il existe une autre syntaxe plus simple d’écriture mais plus lente en exécution : for … in

// for (var fruit in array) 
// {
//    console.log("Fruit : "+array[fruit]);
// }

// Notez bien qu’avec for…in la variable extraite
// (dans notre cas la variable fruit) contient l’indice et non pas la valeur, il faut donc écrire tableau[indice] pour afficher la valeur.







// Tri croissant par recherche successive des minima

// Le principe est le suivant :

// Recherche du minimum dans le tableau de 30 valeurs, et échange du contenu des cases d’indice 1 et d’indice correspondant à la valeur du minimum.
// Application du même principe sur 29 valeurs (30 - première), puis sur 28, puis 27 .... jusqu’au tableau de deux cases.

// Tableau initial                 8   1   7   5
// Après le premier passage        1   8   7   5
// Après le deuxième passage       1   5   7   8
// Après le troisième passage      1   5   7   8

// Lors du premier passage, on a inversé les cases d’indices 1 et 2. 
// Lors du deuxième passage, le minimum de (5, 7,8) étant 5, on a inversé les cases d’indices 2 et 4. 
// Lors du troisième passage, rien ne s’est passé.



// Tri à bulle

// Le principe est le suivant :

// Le tableau est parcouru en comparant les éléments consécutifs.

// S’ils sont mal ordonnés, ces deux éléments sont permutés. On recommence jusqu’à ce qu’il n’y ait plus d’échange.

// Visualisation du traitement sur 5 valeurs :

//     Tableau initial     5   18  14  4   26

//     Premier passage     5   14  18  4   26
//                     5   14  4   18  26
//     Deuxième passage        5   4   14  18  26
//     Troisième passage       4   5   14  18  26
//     Quatrième passage       4   5   14  18  26

// Comme aucune permutation n’a été réalisée, l’algorithme s’arrête.

// Méthode : Les éléments sont comparés deux à deux, et on affecte une variable booléenne à vraie si un échange est réalisé.

// La condition d’arrêt du traitement est que la variable booléenne soit restée à faux.



// Recherche d’un élément sur un tableau trié

// Pour une machine, quelle est la manière la plus rationnelle de chercher dans un dictionnaire ? 
// C'est de comparer le mot à vérifier avec le mot qui se trouve pile poil au milieu du dictionnaire. 
// Si le mot à vérifier est antérieur dans l'ordre alphabétique, on sait qu'on devra le chercher dorénavant dans la première moitié du dico. 
// Sinon, on sait maintenant qu'on devra le chercher dans la deuxième moitié.

// A partir de là, on prend la moitié de dictionnaire qui nous reste, et on recommence : 
// on compare le mot à chercher avec celui qui se trouve au milieu du morceau de dictionnaire restant. 
// On écarte la mauvaise moitié, et on recommence, et ainsi de suite.








// Exemple de récupération de la valeur « 1 » avec un tableau à une seule dimension et un autre avec deux dimensions 

// var Arr1 = [1,2]

// console.log(Arr1[0])

// var Arr2 = [
//    [1,2],
//    [2,3]
// ]

// console.log(Arr2[0][0])




// // Exemple de cas avec deux tableaux différents pour lesquels on souhaite afficher l’ensemble des valeurs :

// var Arr1 = [1,2]

// for (var i = 0; i < Arr1.length; i++) {
//    console.log(Arr1[i])
// }

// // 1,2

// var Arr2 = [
//    [1,2],
//    [3,4]
// ]

// for (var i = 0; i < Arr2.length; i++) {
//    for (var j = 0; j < Arr2[i].length; j++) {
//       console.log(Arr2[i][j])
//    }
// }

// // 1, 2, 3, 4





// // Exemple d’une utilisation pour récupérer chacune des valeurs du tableau et les additionner pour obtenir un total :
// « forEach » qui permet, via une fonction, d’afficher ou de réaliser des manipulations sur les variables d’un tableau.


// var Sum = 0
// var Arr = [1,2,3]
// Arr.forEach(SumFunction)

// function SumFunction (value, index, array) {
//     Sum += value
// }

// console.log(Sum)

// // 6

//************************************************* */

// var multi =1;
// var array = [6,5];

// array.forEach(multifunction)


// function multifunction(value,/* <-- une valeur dans le tableau */ index, /* l’index de cette valeur */ array /* e tableau en lui même*/ ) {
   
//    multi *= value

// }
// console.log(multi)

// // // 30


// var List = [1,2,3,1,5]

// if (List.indexOf/* le premier (1) dans le tableau */ (1) == List.lastIndexOf/*le dernier (1) dans le tableau*/(1)) // Formule qui voit si (1) est unique ou en doublons 
// {
//   console .log('1 is unique');    
// }  

//    else 
//    {
//    console.log('1 is not unique');
//    } 


// if (List.indexOf(2) === List.lastIndexOf(2))    
// {
//    console .log('2 is unique');    
// }    

//    else 
//    {
//   console.log('2 is not unique');
//    }


//    var mon_tableau = ['Nour', 'Salah', 'Mourad', 'Alexendar', 'Lamia', 'Sabrine'];
// console.log(mon_tableau );

// function mettreAJourTableau(tableau, element) {

//    element= prompt ("choissisez un prenom")
//     if (tableau.indexOf(element) === -1) {
//         tableau.push(element);
//         console.log('Le nouveau tableau est : ' + tableau);
//         element= prompt ("choissisez un prenom")

//     } else if (tableau.indexOf(element) > -1) {
//         console.log(element + ' existe déjà dans le tableau.');
//         element= prompt ("choissisez un prenom")

//     }
// }
// mettreAJourTableau(mon_tableau, prompt);
// Le nouveau tableau est : ["Nour", "Salah", "Mourad", "Alexendar", "Lamia", "Sabrine", "Soulayma"]
//mettreAJourTableau(mon_tableau, 'Mourad');
// Le nom Mourad existe déjà dans le tableau.


var list =['1','2','3','4']
console.log(list);
  
while ( list.indexOf= prompt("choissis un nv prenom"== -1) )
{
   
list.push (prompt) 
console.log(list);
}