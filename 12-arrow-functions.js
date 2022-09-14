function ola () {
  console.log("OLA")
}

ola()



const arrowOla = () => {             // Essa é a maneira de declarar uma Arrow Function no JS.
  console.log("ARROW OLA")
}

arrowOla()



const soma = (A, B) => {
  return A + B
}

console.log(soma (10, 20))

/*
const soma = (A, B) => A + B

console.log(soma (10, 20))
*/

/*
const ePar = (num) => num % 2 === 0    //Esses parênteses do (num) também poder ser retirados. 
const ePar = num => num % 2 === 0

console.log(ePar(2))
console.log(ePar(3))
*/