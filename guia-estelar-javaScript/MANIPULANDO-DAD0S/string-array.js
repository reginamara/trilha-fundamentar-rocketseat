/*

Manipulando string e arrays

Para separar um texto por espaços, pode-se usar o método split(" "), que transforma o texto em um array de strings baseado no argumento, que no caso são os espaços. Para juntar esse array é possível usar o método join('"), que juntaria essas palavras sem nenhum separador, porém colocando um argumento, no caso um underscore ( join("_") ) as palavras são juntadas com o argumento de separador.

    separe umtexto que contém espaços, em um novo array onde cada texto é uma posiçaodo array. Depois disso, transforme o array em um texto e onde eram os espaços, coloque _


*/


let phrase = "Vivendo o Amor!"
let myArray = phrase.split(" ")
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore)