/*

For...in
    - Cria um loop em cima de um objeto, pegando as suas propriedades.

*/

let person = {
    name: 'Laisa',
    age: 20,
    weight: 61.5
}
for(let property in person) {
    console.log(property)
    console.log(person[property])
}