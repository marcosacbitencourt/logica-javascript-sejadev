//Usar no JS Fiddle   
  
const API_URL = 'https://jsonplaceholder.typicode.com/users'

async function getUsers () {
  const response = await fetch(API_URL) //O JS está buscando a informação fora dele através do "fetch"
  console.log(response)
}

getUsers()




//Abaixo um exemplo de como filtrar os dados de emails no outro servidor.
const API_URL = 'https://jsonplaceholder.typicode.com/users'

async function getUsers () {
  const response = await fetch(API_URL)
  const data = await response.json()
  
  const userEmails = data.map((obj) => {
    return {
    email: obj.email
    }
  })
  console.log(userEmails)
}

getUsers()


//Usando o destructor
const API_URL = 'https://jsonplaceholder.typicode.com/users'

async function getUsers () {
  const response = await fetch(API_URL)
  const data = await response.json()
  
  const userEmails = data.map(({ email }) => {  // Destructor (({ email }))
    return {
    email
    }
  })
  console.log(userEmails)
}

getUsers()

// JSON é um formato pré-definido para compartilhamento de dados. Normalmente, esses "links" que 
// fazem troca de informações (APIs) utilizam esse formato de dados pra "conversarem".
  