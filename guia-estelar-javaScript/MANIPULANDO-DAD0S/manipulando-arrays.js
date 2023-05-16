// Manipulando Arrays

let techs = ["html", "css", "js"]

// Adicionar um intem no fim
techs.push("node.js")

// Adicionar no começo
techs.unshift("sql")

// Remover do fim
techs.pop()

// Remover do começo
techs.shift()

// Pegar somente alguns elementos do array
console.log(techs.slice(1,3))

// Remover um ou mais intens em qualquer posição de um array
techs.slice(1,2)

// Encontrar a posição de um elemento no array
let index = techs.indexOf('html')
techs.splice(index, 1)

console.log(techs)