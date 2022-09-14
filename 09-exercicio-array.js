/*
A prefeitura possui uma lista com a idade de cada morador, e quer saber a
quantidade de moradores que são eleitores obrigatórios, facultativos ou
não eleitores de acordo com a informação abaixo:
Obrigatório: entre 18 e 69 anos.
Facultativo: entre 16 e 17 anos ou acima de 70 anos.
Não eleitor: Abaixo de 16 anos. 
*/

const lista = [18, 10, 19, 70, 80, 15, 22, 29, 35, 42, 59, 60, 22, 29, 79, 99]
let obrigatorio = 0
let facultativo = 0
let naoEleitor = 0

for (let idade of lista) {
  if (idade >= 18 && idade <= 69) obrigatorio++
  else if (idade < 16) naoEleitor++
  else facultativo++
}

console.log("Obrigatório: ", obrigatorio)
console.log("Facultativo: ", facultativo)
console.log("Não eleitor: ", naoEleitor)

/*
Pergunta: Porque tenho que deixar 0 no let obrigatorio, facultativo, naoEleitor?
Resposta: Porque ele sempre soma +1 no numero que já está lá, se você não colocar 
o zero, será indefinido, e indefinido (undefined) não é um número válido!
*/