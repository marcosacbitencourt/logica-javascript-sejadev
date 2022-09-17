const pessoa = {
  nome: "José",
  sobrenome : "Fortes",
  idade: 27,
  senha: "123"
}

const { nome, idade, senha } = pessoa  //const nome = pessoa.nome           
                                //const sobrenome = pessoa.sobrenome Normalmente seria feito desta forma
console.log(idade)              //const idade = pessoa.idade
console.log(nome)
console.log(senha)

const pessoaAtualizada = {
  ...pessoa,
  idade: 30,
  senha: "456"
}

console.log(pessoaAtualizada)

/*
const array = [10, 20, 30, 40]  
const [a, b] = array            //Dentro de arrays também é possível usar o destructor.
console.log(a)
console.log(b)

const newArray = [...array, 50]
console.log(newArray)
*/
