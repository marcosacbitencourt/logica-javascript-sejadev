/*
const array = [1, 5, 4, 3, 10, 7, 8, 20, 12]

array.forEach((eLemento, posicao) => {
  console.log(eLemento)
  console.log(posicao)
})     //A forma apresentada abaixo mostra melhor essa maneira de mostrar as posições e elementos,
         concatenando entre suas posições.
*/

/*
const array = [1, 5, 4, 3, 10, 7, 8, 20, 12]

array.forEach((eLemento, posicao) => {
  console.log(`${eLemento} - posicao ${posicao}`)
})     //Dessa forma se consegue mostrar a posição e o elemento ao mesmo tempo.
*/
const array = [1, 5, 4, 3, 10, 7, 8, 20, 12]
array.forEach((eLemento, posicao) => {

})

const valor = array.find((eLemento) => {
  if (eLemento === 10) return true
  return false
})
console.log(valor)

const index = array.findIndex((eLemento) => {
  if (eLemento === 10) return true
  return false
})
console.log(index)

const some = array.some((eLemento) => {
  if (eLemento >= 10) return true
  return false
})
console.log(some)

const every = array.every((eLemento) => {
  if (eLemento >= 10) return true
  return false
})
console.log(every)

/*
// Todo o código acima pode se resumir a isso apenas!
const array = [1, 5, 4, 3, 10, 7, 8, 20, 12]
array.forEach((eLemento, posicao) => {

})
const valor = array.find(eLemento => eLemento === 10)
console.log(valor)
const index = array.findIndex(eLemento => eLemento === 10)
console.log(index)
const some = array.some(eLemento => eLemento >= 10)
console.log(some)
const every = array.every(eLemento => eLemento >= 10)
console.log(every)
*/

const newArray = [1, 2, 3, 4, 5]
// console.log(newArray.splice(3, 2))  
//O .splice corta o array, o primeiro parâmetro é o início e o segundo é a quantidade.

/*
console.log(newArray.map((eLemento) => {  //Altera os valores do array seguindo alguma regra.
  return eLemento * 2
}))

console.log(newArray.filter((eLemento) => {
  return eLemento % 2 === 0
}))
//Filtra os elementos do array obedecendo regra de execução.
*/

console.log(newArray.reduce((acumuLado, eLemento) => {
  return acumuLado + eLemento
}, 0))
//O .reduce, reduz o array para algum outro elemento.



