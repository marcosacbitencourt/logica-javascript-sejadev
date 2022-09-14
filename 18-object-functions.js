const person = {
  name: "José",
  lastname: "Fortes"
}

//Object.keys(): Cria um array com todas as chaves do objeto.
console.log(Object.keys(person))

//Object.values(): Cria um array com todos os valores do objeto.
console.log(Object.values(person))

//Object.entries(): Cria um array com um array de objetos e valores.
console.log(Object.entries(person)) // -> [['name', 'José'], ['lastName', 'Fortes']]
/*
const array = Object.entries(person)
array
*/

//Exemplo

const livros = {
  'livro A': 19.90,
  'livro B': 39.90,
  'livro C': 79.90
}

const values = Object.values(livros)
const sum = values.reduce((vaL, acc) => {
  return vaL + acc
}, 0)

console.log(sum)