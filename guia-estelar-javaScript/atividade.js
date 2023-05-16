// 1. Declare uma variável de nome weigth
//let weigth

// 2. Que tipo de dado é a variável acima? 
//console.log(typeof weight)

/*
    3. Declare umavariável e atribua valores para cada um dos dados:
        * name: String
        * age; Number (integer)
        * stars: Number (float)
        * isSubscribed: Boolean

// let name = "Regina"
// let age = 30
// let stars = 4.8
// let isSubscribed = true

 */

//  4. A variável student abaixo é de que tipo de de dados? Objeto

//  let student = {};
//   console.log(typeof student)


    // 4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.

    // 4.2 Mostre no console a seguinte mensagem:
    // <name> de idade <age> pesa <weidht> kg.
    // Atenção: substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto


    let student = {
        name: "Regina",
        age: 30,
        weight: 73.3,
        isSubscribed: true,
    }

    let student2 = {
        name: "Juarez",
        age: 30,
        weight: 73.3,
        isSubscribed: true,
        
    }
    //console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg`)


   // 5. Declare uma variável do arrey, de nome student e atribua a ela valor nenhum, ou seja, somente arrey vazrio.

let students = []

/*

*/

   // 6. Reatribua valor para a variábel acima, colocando dentro dela o objeto student da questão 4. (Não copiar e Colar, mas usar o objeto criado e inserir a ele no array)



students = [
    student, student2
]
console.log(students)

 /*
    7. Coloque no console o valor da pasição zero do arrey acima

*/

// console.log(students[0])

/*
    8. Crie umnovo student e coloque na posição 1 do arrey students

*/
const Mara = {
    name: "Mara",
    age: 29,
    weight: 62.5,
    isSubscribed: true
}
students[1] = Mara
console.log(students)


/*
    9. Sem rodar o código responda qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e veja se você acertou.

    console.log(a)
    var a = 1

    R: Vai imprimir no console.log 'undefined' porque a variável 'a' ainda não está criada, porém ela vai sofrer o hoisting
*/

console.log(a)
 var a = 1