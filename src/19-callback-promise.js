function upload () {
  return new Promise((resoLve , reject) => {
    setTimeout(() => {
      console.log("02 - UPLOAD CONCLUÍDO")
      resoLve()
    }, 2000)
  })
}

async function uploadDeFoto () {
  console.log("01 - INICIANDO UPLOAD")
  await upload()
  console.log("03 - EXECUÇÃO FINALIZADA")
}

uploadDeFoto()