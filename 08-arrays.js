const variavel = 10
let array = [true, false, 0, 1, 2, "string aqui", "sejadev", variavel]
//             0     1    2  3  4         5           6         7
console.log(array[5])

/*
const variavel = 10
let array = [true, false, 0, 1, 2, "string aqui", "sejadev", variavel]
//             0     1    2  3  4        5            6          7

array[0] = 1000          //--> Dessa forma conseguimos alterar o valor de um variavel, ou adicionar uma!
console.log(array)

array = [1, 2, 5, 10]    //--> Esse array vai alterar todos os valores do antigo!
console.log(array)

const variavel = 10
let array = [true, false, 0, 1, 2, "string aqui", "sejadev", variavel]
//             0     1    2  3  4        5            6          7
console.log(array)
array.push(1000, "string") //--> Dessa maneira é adicionado mais valores ao array!
console.log(array)

let array = [true, false, 0, 1, 2, "string aqui", "sejadev"]
//             0     1    2  3  4        5            6    
console.log(array)
array.pop                  //--> Remove exclusivamente o último elemento do array!
console.log(array)

let newArray = [10, 20, 30]
console.log(newArray.length)  //--> Mostra o "tamanho" do array, ou seja, possui 3 elementos!

let newArray = [10, 20, 30]
let i = 0
while (i < newArray.length) {
  console.log(i)
  console.log(newArray[i])
  i++
}       
//--> Este caso é uma demonstração para mostrar todos os valores e posições desta array!

Exercício --> Dado um array, com X números, encontrar a média desses números.
media = (soma dos elementos) / tamanho
const numbers = [10, 20, 30]
let sum = 0
for (let num of numbers) {
  sum = sum + num
}
const media = sum / numbers.length
console.log(sum)

*/