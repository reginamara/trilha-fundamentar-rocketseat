/*

Para criar um array com um método construtor, usa-se new Array(args), passando como argumento o tamanho deste vetor ou os valores, por exemplo: const array = new Array("a", "b", "c").

    - Crindo array com construtor
*/

let myArray = ['a', 'b', 'c']
console.log(myArray)

``

/*

Para contar a quantidade de elementos em um array pode-se usar o método length.

*/
console.log(["a", "b", "c"].length)

``
/*

Para transformar uma string em um array, pode-se usar o objeto Array com o método from(), passando como argumento a string a ser transformada em array. Por exemplo console.log(Array.from("developer").

    - Transformar uma cadeia de caracteres em elementos de um array
*/

let word = "manipulação"
console.log(Array.from(word))