let string = "STRING"
let number = 10
let decimal = 10.10
let boolean = true
let undef = undefined

const ovosDisponiveis = 10
if (ovosDisponiveis > 0) {
	console.log("LEVE 6 LEITES")
} else {
	console.log("LEVE 1 LEITE")
}

/**
const --> variável não muda
let   --> variável pode mudar
 */


const numero = 26
if (numero % 13 == 0) {
  console.log("É divisível")
} else {
  console.log("Não é divisível")
}

const dias = 70
const qtMeses = Math.floor(dias / 30)
const qtDiasTotal = qtMeses * 30
const diasPassados = dias - qtDiasTotal

console.log(diasPassados)