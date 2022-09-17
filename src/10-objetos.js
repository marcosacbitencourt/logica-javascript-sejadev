/*
Uma breve revisão:
const num = 10
const array = []
const math = (10 + 10) / 20
--> Nas outras variáveis sempre usávamos parênteses ou colchetes para montar as variáveis,
com objetos usamos as chaves! 
const pessoa {

}
*/

const num = 10
const pessoa = {
  nome: "José",
  idade: 20,
  casado: true,
  notas: [5, 8, 10],
  endereco: {
    rua: "Rua XYZ",
    numero: 100,
  }
}

console.log(pessoa["nome"])              // console.log(pessoa.nome)
console.log(pessoa["idade"])             // console.log(pessoa.idade)
console.log(pessoa["casado"])            // console.log(pessoa.casado)
console.log(pessoa["notas"][2])          // console.log(pessoa.notas[2])
console.log(pessoa["endereco"]["rua"])   //console.log(pessoa.endereco.rua)
console.log(pessoa["endereco"]["numero"])

const array = [pessoa, pessoa]          //Pode-se passar um objeto para dentro de um array.
console.log(array)