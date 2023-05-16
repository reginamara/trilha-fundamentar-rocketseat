/*

    Function() constructor

    * expressão new
    * criar um novo objeto
    * this keyword

    Funções construtoras são utilizadas para criar novos objetos e geralmente tem a sua primeira letra maiúscula, todos com as mesmas características que são criadas na função, usando a palavra reservada this para se referir ao objeto sendo criado.
*/

function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + " está andando"
    }
    
}
const regina = new Person("Regina")
const juarez = new Person("Juarez")
console.log(regina.walk())
console.log(juarez.walk())