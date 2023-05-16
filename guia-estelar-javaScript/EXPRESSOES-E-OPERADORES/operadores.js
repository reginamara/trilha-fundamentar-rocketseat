/*

Operadores de agrupamentos - Grouping Operator ()

Na matemática, temos uma noção de precedência, onde certos operadores têm de ser realizados primeiro, e não é diferente para um computador. Porém, podemos utilizar os parênteses para realizar o agrupamento de alguns operadores, que moverá a precedência do cálculo.

*/

//let total = 2 + 3 * 5
console.log(total)

//com essa precedência, nosso resultado é 17.

let total = (2 + 3) * 5
console.log(total)
// o cálculo mudou a precedência, fazendo nosso resultado tornar-se 25.

``

/*
    Operadores de Comparação

    Irá comparar valores e retornar um Boolean como resposta à comparação.

*/

let one = 1 
let two = 2

// == igual a
console.log( two == 1)
console.log( one == 1)

// != diferente de
console.log( one != two)
console.log( one != 1)
console.log( one != "1")


``

// Operadores de comparação Estreitamente Igual e Estreitamente Diferente

/* 
    === estreitamente iagual a 
- os 3 sinais de igual significa que vai comparar os valores e os tipos de elementos.

*/
console.log( one === "1" ) // esse é string
console.log( one === 1) // esse é number


// !== estreitamente diferente de
console.log( two !== "2" )
console.log( two !== 2 )


``

// Operadores de comparação Maior e Menor (igual)

// >  Maior que
console.log(one > two)
// >=  Maior igual a 
console.log(one >= 1)
console.log(two >= 1)


// < Menor que
console.log(one < two)
// <=  Menor igual a 
console.log(one <= two)
console.log(one <= 1)
console.log(one <= 0)


``

/* Operadores de atribuição
Quando falamos em atribuição, queremos na verdade dizer assignment, que já vimos bastante, mas podemos também realizar diferentes tipos de atribuição, usando operadores aritméticos.

*/

Exemplos:

// Operadores de atribuição (Assignment)
let x

// assignment normal:
x = 1 

// addition assignment (adição):
x += 2 // é a mesma coisa de x = x + 2

// subtraction assignment (subtração):
x -= 1 // é a mesma coisa de x = x - 2

// multiplication assignment (multiplacação):
x *= 2 // é a mesma coisa de x = x * 2

// division assignment (divisão):
x /= 2 // é a mesma coisa de x = x ÷ 2

// exponetiation assignment (exponenciação):
x **= 2 // é a mesma coisa de x ÷= 2

// remainder assignment (resto de divisão):
x %= 2



``
// Operadores Lógicos (Logical Operators)

// 2 valores booleans, quando verificados resultará em verdadeiro ou falso.

let pao = true
let queijo = true

// and &&
console.log(pão && queijo)

// OR ||
console.log(pão || queijo)

// NOT !
console.log(!pão)



``
/*
Operador condicional ternário

Os operadores ternários, conhecidos como operadores de condição, como o nome sugere, são dependentes de condições e podem entregar valores diferentes com base nelas.

Dependendo da condição, nós receberemos valores diferentes.
*/

// Funciona da seguinte forma;
// Condição então valor 1 se não valor 2
condição ? valor1 : valor2
//Exemplo de uso:

// Café da manhã top
let café = false
let bolo = false

const niceBreakfast = café || bolo ? 'Café top' : 'Café ruim'

console.log(niceBreakfast)

``
/*
Operadores para string

Temos também os string operators, os operadores de string, e nós até já vimos um desses antes, o comparison operator, ou ==, para os mais íntimos.

Agora vamos ver sobre a concatenação, que é o retorno da união de duas strings.

*/

// Seu símbolo é o de + (positivo), e seu uso é simples, algo próximo de:

console.log('a' + 'a')
// nesse caso, o retorno da string seria aa.



``

// Falsy e truthy

// O falsy é quando um valor é considerado falso em contextos que onde um booleano é obrigatório (condicionais e loops), exemplo a seguir:

/*
	Todos os valores abaixo seriam representados como false em um boolean.
		false
    0
    -0
    ""
    null
    undefined
    NaN
*/

console.log( NaN ? 'verdadeiro' : 'falso' )

// Já o truthy é o oposto, quando um valor é considerado verdadeiro (true) em contextos onde um booleano é obrigatório (condicionais e loops), exemplo a seguir:

/* 
	Todos os valores abaixo seriam representados como false em um boolean.
		true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity
*/

console.log( Infinity ? 'verdadeiro' : 'falso' )


``

// Precedência dos operadores

// Ordem de importância de cada um deles.

// De cima para baixo, do mais importante ao menos importante.

/*
* grouping                      ( )
* negação e incremento          ! ++ --
* multiplicação e divisão       * /
* adição e subtração            + -
* relacional                    < <= > >=
* igualdade                     == != === !==
* AND                           && 
* OR                            ||
* condicional                   ?:
* assignment (atribuição)       = += -= *= %=

*/
console.log( (2 + 5) * 10)