const API_URL = "https://jsonplaceholder.typicode.com/userss"

const getUsers = async () => {
  try {                                                            // try -> comandos usados.
    const response = await fetch(API_URL)
    if (response.status === 404) throw new Error("Não encontrado") // throw -> Comando para avisar erro!
    const data = await response.json()
    const emails = data.map(( { email }) => ({ email }))
    console.log(emails)
  } catch (error) {                                                // catch -> outro comando usado.
    console.log(error.message)    
  }

}  

getUsers()