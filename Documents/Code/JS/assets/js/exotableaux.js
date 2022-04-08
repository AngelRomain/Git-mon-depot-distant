
// *********************************************** */
// ********************Exercice 1 *************** */
//Ecrivez un programme permettant de créer un tableau, dont la taille est saisie au clavier.
//Ensuite l'utilisateur doit rentrer les différentes valeurs du tableau.
//Puis votre programme doit afficher le contenu du tableau.


var myTableau = [];
var i=0; 
var taille; // 'taille' sera la limite de colonne du tableau

taille = prompt ("cb de colonne dans le tableau?")
myTableau [i] = prompt ("entrez une nouvelle valeur");

for (i=1; i<taille;i++) 
{
    
    alert ("element =" + myTableau)
    myTableau [i] = prompt ("entrez une nouvelle valeur");
    

}
console.table(myTableau); // afficher le tableau 
alert ("la longueur du tableau = "+ myTableau.length) // Afficher la longueur du tableau


