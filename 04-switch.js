/*
Dado um número, contruir uma lógica para imprimir o nome
do mês do número.
Exemplo:
1 - console.log("Janeiro")
2 - console.log("Fevereiro")
...

12 - console.log("Dezembro")
!== 12 - console.log("Mês inexistente")
*/

/*
const numeroDoMes = 12

if (numeroDoMes === 1) console.log("Janeiro")
else if (numeroDoMes === 2) console.log("Fevreiro")
else if (numeroDoMes === 3) console.log("Março")
else if (numeroDoMes === 4) console.log("Abril")
else if (numeroDoMes === 5) console.log("Maio")
else if (numeroDoMes === 6) console.log("Junho")
else if (numeroDoMes === 7) console.log("Julho")
else if (numeroDoMes === 8) console.log("Agosto")
else if (numeroDoMes === 9) console.log("Setembro")
else if (numeroDoMes === 10) console.log("Outubro")
else if (numeroDoMes === 11) console.log("Novembro")
else if (numeroDoMes === 12) console.log("Dezembro")
else console.log("Mês inexistente")
*/

const numeroDoMes = 8

switch (numeroDoMes) {
  case 1:
    console.log("Janeiro")
  break
  case 2:
    console.log("Fevereiro")
  break  
  case 3: 
    console.log("Março")
  break
  case 4:
    console.log("Abril")
  break
  case 5:
    console.log("Maio")
  break
  case 6:
    console.log("Junho")
  break
  case 7:
    console.log("Julho")
  break
  case 8:
    console.log("Agosto")
  break
  case 9:
    console.log("Setembro")
  break
  case 10:
    console.log("Outubro")
  break
  case 11: 
    console.log("Novembro")
  break
  case 12:
    console.log("Dezembro")
  break
  default: 
    console.log("Mês inexistente")
  break
}