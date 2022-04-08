
// var reponse1 = window.prompt("Saisissez votre nom");
// var reponse2 = window.prompt("Saisissez votre couleur préférée");
// document.write  ("<h1>"+"tu t'appelle "+reponse1); 
// document.write  ("<br>"+"<h2>"+"c'est vraiment une couleur à chier le "+reponse2);

// if (window.confirm("Es-tu con?") ==true) 
// {
// window.alert ("sacré con!!!");
// } 

// else { window.alert("gros mytho!!!")}
 

// console.log("bonjour"+" "+reponse1);



//****************************************************************************//
//l'utilisateur doit entrer la chaine de caractere "4" pour valider la condition  


if (window.prompt("2+2=") == "4") {
  window.alert ("bien joué connard")
  
}
else {
  window.alert ("tu es sacrément con!!!")
}




//var a = 100;
//var b = a;
//var c = "1.0";
//var d = true

// Incrémentation de a
//var e = a++;


// window.confirm ("ceci est une chaine de caractère:" + a);

// alert (a)

//**************** */
// Exemple de calcul

// var a = 3;
// var b = a-2;

// a -= b; // a = a-b = 3-1 = 2
// a += b; // a = a+b = 3+1 = 4
// b *= a; // b = b*a = 1*3 = 3
// b /= b; // b = b/b = 1




//**********************//
// Inverser la valeur de d

//d = true;
//d =!true;

//************************************ **/
// Afficher la valeur de d dans la console

//function logName(){
    // console.log(d);
//}

//logName();

//var d;


//************************************************************************* */
// Afficher la valeur de d dans un document write (directement sur la pageweb)


// document.write (d);





//********************************************************************************************/
//Ecrivez un programme qui demande un nombre à l'utilisateur puis qui teste si ce nombre est pair. 
//Le programme doit afficher le résultat nombre pair ou nombre impair. 
//Vous devez utiliser l'opérateur modulo % qui donne le reste d'une division. 
//a%2 donne le reste de la division de a par 2, si ce reste est égal à zéro, a est divisible par 2.

// var num = window.prompt("choisis un nombre");

// if (num%2 ==1) {console.log ("c'est un nombre impair"); 
  
// }
//  else {console.log ("c'est un nombre pair");
// }


//********************************************************************* */
// Ecrivez un programme qui demande l'année de naissance à l'utilisateur. 
// En réponse votre programme doit afficher l'âge de l'utilisateur et indiquer si l'utilisateur est majeur ou mineur.


// var date = window.prompt("quelle est ta date de naissance?");
// var annee = ("2022");
// var age = ((-date) - (-annee));
// if (date <= 2004)
// {
//     console.log("Vous êtes majeur");
//     alert (" vous avez " + age +" ans" );
// }

//     else { 
//         console.log("Vous êtes mineur");
//     alert ("vous avez " + age + " ans" );
// };


//********************************************************************************************************* */
//Faire la saisie de 2 nombres entiers, puis la saisie d'un opérateur +, -, * ou /.
//Si l'utilisateur entre un opérateur erroné, le programme affichera un message d'erreur.
//Dans le cas contraire, le programme effectuera l'opération demandée (en prévoyant le cas d'erreur division par 0), puis affichera le résultat.


// var a = parseInt (prompt ("entrez un nombre"));
// var b = parseInt (prompt ("entrez un autre nombre"));
// var c = prompt ("choisissez un operateur (+-*/)");

// if  (c == "+")
// {
//     c = (a+b)
//     console.log(c);
// }

// else if (c == "-")
// {
//     c = (a-b)
//     console.log(c);
// }
    
// else if (c == "*")
// {
//     c = (a*b)
//     console.log(c);
// }

// else if (c == "/")
// {
//     if (b==0) 
//     {4
//         alert ("vous ne pouvez diviser par 0");
//     }
//     c = (a/b)
//     console.log(c);
// }
// else
// {
//     alert("choisissez un operateur (+-*/) !!!!!!!!!!!!!");
    
// }