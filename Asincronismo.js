// Asincronismo con Promise
const connectToSteamDB = (isConnected) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        isConnected ? resolve("Se ha conectado a SteamDB") : reject("Error de conexion a SteamDB")
      }, 3000)
    })
  }
  
  connectToSteamDB(false) // Aqui se cambia (true o false) para simular una conexion
    .then(msg => console.log(msg))
    .catch(err => console.log(err))