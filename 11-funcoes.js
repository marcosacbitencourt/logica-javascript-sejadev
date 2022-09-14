/*
Faça uma função que verifica se o número é par ou não!
*/

function par (num) {
  const condicao = num % 2 === 0
  return condicao
}

const ePar = par(3)
console.log(ePar)

/*
Mostrar os números pares de 0 a 100.
*/

for (let i = 0; i <= 100; i++) {
  if (par(i)) console.log(i)
} 