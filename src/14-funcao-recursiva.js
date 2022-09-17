/*
Crie um algorítimo para calcular o fatorial de um número n!.

Obs.: O fatorial de um número é calculado pela multiplicação desse número
por todos os seus antecessores até o número 1.

Exemplo.:
2! = 2 * 1
3! = 3 * 2 * 1
4! = 4 * 3 * 2 * 1

*/

function fatorial (n) {
  if (n <= 2) return n
  return fatorial(n - 1) * n
}

const numero = 4
const resposta = fatorial(numero)
console.log(resposta)